"use client";
import { apiService } from "@/services";
import Multiselect from "multiselect-react-dropdown";
import { Button, Col, Form, Row, Spinner, Alert } from "react-bootstrap";
import { constants } from "../../garage-management/constant";
import { useContext, useEffect, useRef, useState } from "react";
import { WorkOrderContext } from "../workOrderContext";
import debounce from 'lodash.debounce';

const WorkOrderStep1 = () => {
	const { setFormStage, setWorkOrder, workOrder } = useContext(WorkOrderContext);
	const [options, setOptions] = useState([]);
	const [customerOptions, setCustomerOptions] = useState([]);
	const [vehicle, setVehicle] = useState(null);
	const [owner, setOwner] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const vehicleRef = useRef(null);
	const ownerRef = useRef(null);

	const handleSearch = debounce(async (val) => {
		if (val?.length > 3) {
			setLoading(true);
			setError(null);
			try {
				const searchResult = await apiService.get(`${constants.searchVehicle}?search=${val}&all=true`);
				setOptions(searchResult);
			} catch (error) {
				setError("Vehicle search error");
				console.error("Vehicle search error:", error);
			} finally {
				setLoading(false);
			}
		}
	}, 300);

	const handleCustomerSearch = debounce(async (val) => {
		if (val?.length > 3) {
			setLoading(true);
			setError(null);
			try {
				const searchResult = await apiService.get(`${constants.searchCustomer}?search=${val}`);
				setCustomerOptions(searchResult);
			} catch (error) {
				setError("Customer search error");
				console.error("Customer search error:", error);
			} finally {
				setLoading(false);
			}
		}
	}, 300);

	useEffect(() => {
		if (vehicle && typeof (vehicle.owner) == 'object') {
			setOwner(vehicle.owner[0]);
		} else if (vehicle && workOrder.customer) {
			setOwner(workOrder.customer);
		}
	}, [vehicle]);

	useEffect(() => {
		if (workOrder) {
			setOwner(workOrder.customer);
			setVehicle(workOrder.vehicle);
		}
	}, [workOrder]);

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (!vehicle || !owner) {
			setError("Vehicle or owner is not selected");
			return;
		}

		setLoading(true);
		setError(null);
		try {
			const payload = {
				vehicle: vehicle._id,
				customer: owner._id,
			};

			let response;
			if (workOrder) {
				response = await apiService.put(`${constants.workOrder}/${workOrder._id}`, payload);
			} else {
				response = await apiService.post(constants.workOrder, payload);
			}

			if (response) {
				setFormStage('2');
				setWorkOrder(response);
			}
		} catch (error) {
			setError("Form submission error");
			console.error("Form submission error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-screen-layout mt-3 py-4">
			<Form className="bg-white p-4 rounded-ai-md shadow-sm" onSubmit={handleFormSubmit}>
				<div className="fs-4 fw-semibold mb-3">Vehicle Details</div>
				{error && <Alert variant="danger">{error}</Alert>}
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
								{loading && <Spinner animation="border" size="sm" className="position-absolute top-50 end-15 translate-middle" />}
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
								{loading && <Spinner animation="border" size="sm" className="position-absolute top-50 end-15 translate-middle" />}
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
					<Button variant="outline-secondary fs-6" size="sm" onClick={() => { router.push('/work-order') }}>Cancel</Button>
					<Button type="submit" variant="primary fs-6" size="sm" disabled={loading}>Next</Button>
				</div>
			</Form>
		</div>
	);
};

export default WorkOrderStep1;
