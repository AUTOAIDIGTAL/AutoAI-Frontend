"use client";
import { apiService } from "@/services";
import Multiselect from "multiselect-react-dropdown";
import { Button, Col, Form, Row } from "react-bootstrap";
import { constants } from "../../garage-management/constant";
import { useContext, useEffect, useRef, useState } from "react";
import { WorkOrderContext } from "../workOrderContext";

const WorkOrderStep1 = () => {
	const { setFormStage, setWorkOrder, workOrder } = useContext(WorkOrderContext);
	const [options, setOptions] = useState([]);
	const [customerOptions, setCustomerOptions] = useState([]);
	const [vehicle, setVehicle] = useState(null);
	const [owner, setOwner] = useState(null);

	const vehicleRef = useRef(null);
	const ownerRef = useRef(null);

	const handleSearch = async (val) => {
		if (val?.length > 3) {
			try {
				const searchResult = await apiService.get(`${constants.searchVehicle}?search=${val}&all=true`);
				setOptions(searchResult);
			} catch (error) {
				console.error("Vehicle search error:", error);
			}
		}
	};

	const handleCustomerSearch = async (val) => {
		if (val?.length > 3) {
			try {
				const searchResult = await apiService.get(`${constants.searchCustomer}?search=${val}`);
				setCustomerOptions(searchResult);
			} catch (error) {
				console.error("Customer search error:", error);
			}
		}
	};

	useEffect(() => {
		if (vehicle && vehicle.owner?.length) {
			setOwner(vehicle.owner[0]);
		}
	}, [vehicle]);

	useEffect(() => {
		if (workOrder) {
			setOwner(workOrder.customer);
			setVehicle(workOrder.vehicle);
			// vehicleRef.current = workOrder.vehicle;
			// ownerRef.current = workOrder.customer;
		}
	}, [workOrder]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		try {
			if (!vehicle || !owner) {
				console.error("Vehicle or owner is not selected");
				return;
			}

			const payload = {
				vehicle: vehicle._id,
				customer: owner._id,
			};

			let response;
			if (workOrder) {
				console.log(payload)
				response = await apiService.put(`${constants.workOrder}/${workOrder._id}`, payload);
			} else {
				response = await apiService.post(constants.workOrder, payload);
			}

			if (response) {
				setFormStage('2');
				setWorkOrder(response);
			}
		} catch (error) {
			console.error("Form submission error:", error);
		}
	};
	console.log('OWNER DETAILS', owner)

	return (
		<div className="min-screen-layout mt-3 py-4">
			<Form className="bg-white p-4 rounded-ai-md shadow-sm" onSubmit={handleFormSubmit}>
				<div className="fs-4 fw-semibold mb-3">Vehicle Details</div>
				<Row>
					<Col xs="12" lg="4">
						<Form.Group className="mb-3" controlId="vehicleRegPlate">
							<Form.Label>Registration Plate</Form.Label>
							<div className="position-relative">
								<Multiselect
									isObject={true}
									options={options}
									displayValue="regPlate"
									className="bg-gray-100 rounded-ai"
									placeholder="Registration Plate"
									onSearch={handleSearch}
									ref={vehicleRef}
									onSelect={(selected) => setVehicle(selected[0])}
									onRemove={() => { setVehicle(null); setOwner(null); }}
									selectionLimit={1}
									selectedValues={vehicle ? [vehicle] : []}
								/>
								<span className="position-absolute top-50 end-15 translate-middle">
									<svg
										width={14}
										height={14}
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.436 10.7301L13.389 12.6821C13.4801 12.7764 13.5305 12.9027 13.5293 13.0338C13.5282 13.1649 13.4756 13.2903 13.3829 13.383C13.2902 13.4757 13.1648 13.5283 13.0337 13.5294C12.9026 13.5306 12.7763 13.4802 12.682 13.3891L10.729 11.4361C9.45275 12.5295 7.8026 13.0862 6.1248 12.9892C4.44701 12.8922 2.87199 12.1491 1.73024 10.9159C0.588492 9.6827 -0.0312305 8.05519 0.00111371 6.3749C0.0334579 4.69462 0.715354 3.09217 1.90372 1.90381C3.09208 0.715446 4.69453 0.0335495 6.37481 0.00120526C8.0551 -0.031139 9.6826 0.588583 10.9158 1.73033C12.149 2.87208 12.8921 4.4471 12.9891 6.1249C13.0861 7.80269 12.5294 9.45284 11.436 10.7291V10.7301ZM6.49999 12.0001C7.95868 12.0001 9.35763 11.4206 10.3891 10.3892C11.4205 9.35772 12 7.95877 12 6.50008C12 5.04139 11.4205 3.64244 10.3891 2.61099C9.35763 1.57954 7.95868 1.00008 6.49999 1.00008C5.0413 1.00008 3.64235 1.57954 2.6109 2.61099C1.57945 3.64244 0.99999 5.04139 0.99999 6.50008C0.99999 7.95877 1.57945 9.35772 2.6109 10.3892C3.64235 11.4206 5.0413 12.0001 6.49999 12.0001Z"
											fill="#1A202C"
										/>
									</svg>
								</span>
							</div>
						</Form.Group>
					</Col>
					<Col xs="12" lg="4">
						<Form.Group className="mb-3" controlId="vehicleMake">
							<Form.Label>Make of car</Form.Label>
							<Form.Control type="text" placeholder="Make of car" value={vehicle?.make || ''} disabled={!!vehicle} />
						</Form.Group>
					</Col>
					<Col xs="12" lg="4">
						<Form.Group className="mb-3" controlId="vehicleModel">
							<Form.Label>Model</Form.Label>
							<Form.Control type="text" placeholder="Model" value={vehicle?.model || ''} disabled={!!vehicle} />
						</Form.Group>
					</Col>
				</Row>
				<Button variant="soft-primary fs-6 d-inline-flex align-items-center" size="sm"><i className="icon-plus fs-5 me-1"></i> Add new vehicle</Button>
				<hr className="my-4" />
				<div className="fs-4 fw-semibold mb-3">Customer Details</div>
				<Row>
					<Col xs="12" lg="4">
						<Form.Group className="mb-3" controlId="customerName">
							<Form.Label>Customer Name / Company Name</Form.Label>
							<div className="position-relative">
								{console.log(owner)}
								<Multiselect
									isObject={true}
									options={customerOptions}
									displayValue="name"
									className="bg-gray-100 rounded-ai"
									placeholder="Customer Name"
									onSearch={handleCustomerSearch}
									ref={ownerRef}
									onSelect={(selected) => setOwner(selected[0])}
									onRemove={() => setOwner(null)}
									selectionLimit={1}
									disable={!!vehicle?.owner?.length}
									selectedValues={owner ? [owner] : []}
								/>
								<span className="position-absolute top-50 end-15 translate-middle">
									<svg
										width={14}
										height={14}
										viewBox="0 0 14 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M11.436 10.7301L13.389 12.6821C13.4801 12.7764 13.5305 12.9027 13.5293 13.0338C13.5282 13.1649 13.4756 13.2903 13.3829 13.383C13.2902 13.4757 13.1648 13.5283 13.0337 13.5294C12.9026 13.5306 12.7763 13.4802 12.682 13.3891L10.729 11.4361C9.45275 12.5295 7.8026 13.0862 6.1248 12.9892C4.44701 12.8922 2.87199 12.1491 1.73024 10.9159C0.588492 9.6827 -0.0312305 8.05519 0.00111371 6.3749C0.0334579 4.69462 0.715354 3.09217 1.90372 1.90381C3.09208 0.715446 4.69453 0.0335495 6.37481 0.00120526C8.0551 -0.031139 9.6826 0.588583 10.9158 1.73033C12.149 2.87208 12.8921 4.4471 12.9891 6.1249C13.0861 7.80269 12.5294 9.45284 11.436 10.7291V10.7301ZM6.49999 12.0001C7.95868 12.0001 9.35763 11.4206 10.3891 10.3892C11.4205 9.35772 12 7.95877 12 6.50008C12 5.04139 11.4205 3.64244 10.3891 2.61099C9.35763 1.57954 7.95868 1.00008 6.49999 1.00008C5.0413 1.00008 3.64235 1.57954 2.6109 2.61099C1.57945 3.64244 0.99999 5.04139 0.99999 6.50008C0.99999 7.95877 1.57945 9.35772 2.6109 10.3892C3.64235 11.4206 5.0413 12.0001 6.49999 12.0001Z"
											fill="#1A202C"
										/>
									</svg>
								</span>
							</div>
						</Form.Group>
					</Col>
					<Col xs="12" lg="4">
						<Form.Group className="mb-3" controlId="customerEmail">
							<Form.Label>Email</Form.Label>
							<Form.Control type="text" placeholder="Email" value={owner?.email || ''} disabled={!!owner} />
						</Form.Group>
					</Col>
					<Col xs="12" lg="4">
						<Form.Group className="mb-3" controlId="customerNumber">
							<Form.Label>Number</Form.Label>
							<Form.Control type="text" placeholder="Number" value={owner?.phoneNumber || ''} disabled={!!owner} />
						</Form.Group>
					</Col>
				</Row>
				<Button variant="soft-primary fs-6 d-inline-flex align-items-center" size="sm"><i className="icon-plus fs-5 me-1"></i> Add new customer</Button>
				<div className="d-flex justify-content-between mt-3 gap-2">
					<Button variant="outline-secondary fs-6" size="sm">Cancel</Button>
					<Button type="submit" variant="primary fs-6" size="sm">Next</Button>
				</div>
			</Form>
		</div>
	);
};

export default WorkOrderStep1;
