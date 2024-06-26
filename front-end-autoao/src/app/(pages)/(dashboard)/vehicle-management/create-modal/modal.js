"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, Dropdown } from "react-bootstrap";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ClientModal from "../../client-management/create-modal/modal";
import { message } from "antd";
import { Cormorant } from "next/font/google";

const VehicleModal = ({ onVehicleAdded, component }) => {
	const pathName = usePathname();
	const [show, setShow] = useState(false);
	const [vinNumber, setVinNumber] = useState(null);
	const [regNumber, setRegNumber] = useState(null);
	const [make, setMake] = useState(null);
	const [model, setModel] = useState(null);
	const [year, setyear] = useState(null);
	const [mileage, setMileage] = useState(null);
	const [client, setClient] = useState(null);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [showList, setShowList] = useState(false);
	const [selectedFiles, setSelectedFiles] = useState(null);
	const [color, setColor] = useState(null)
	const [fuelType, setFuelType] = useState(null)
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInputChange = async (event) => {
		setSearchTerm(event.target.value);
		if (searchTerm?.length > 3) {
			const searchResult = await apiService.get(`${constants.searchCustomer}?search=${searchTerm}`);
			setFilteredOptions(searchResult);
			if (searchResult.length > 0) {
				setShowList(true);
			}
		} else if (filteredOptions.length > 0) {
			setShowList(false);
		}
	};

	const handleOptionSelect = (selectedOption) => {
		// selected option', selectedOption);
		const [clientId, clientName] = selectedOption.split("_");
		setClient(clientId);
		setSearchTerm(clientName);
		setShowList(false);
	};

	const handleFileChange = (event) => {
		setSelectedFiles([...event.target.files]);
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		if (!vinNumber || !regNumber || !make || !model || !year || !mileage) {
			message.error("Please fill in all the required fields.");
			return;
		}

		const data = new FormData();
		data.append('vinNumber', vinNumber);
		data.append('regPlate', regNumber);
		data.append('make', make);
		data.append('model', model);
		data.append('year', year);
		data.append('mileage', mileage);
		data.append('fuelType', fuelType);
		data.append('color', color);
		if (client) data.append('owner', client);
		selectedFiles?.map((file) => data.append('files', file))

		const response = await apiService.post(constants.vehicle, data);

		if (response) {
			// response', response);
			if (onVehicleAdded) onVehicleAdded(response);
			setShow(false);
			setVinNumber(null);
			setRegNumber(null);
			setMake(null);
			setModel(null);
			setyear(null);
			setMileage(null);
			setClient(null);
			setSelectedFiles(null);
			setColor(null);
			setFuelType(null);
		}
	};

	return (
		<>
			{

				<div onClick={handleShow}>
					{pathName == '/vehicle-management' ?
						<Button variant="primary fw-medium" >
							Add New Vehicle
						</Button> : component ? component : ''}
				</div>
			}



			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Add New Vehicle</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row className="row-cols-1 row-cols-lg-2">
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>VIN Number</Form.Label>
									<Form.Control
										type="number"
										placeholder="VIN Number"
										value={vinNumber}
										onChange={(e) => setVinNumber(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Registration Plate</Form.Label>
									<Form.Control
										type="text"
										placeholder="Registration Plate"
										value={regNumber}
										onChange={(e) => setRegNumber(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row className="row-cols-1 row-cols-lg-3">
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Make</Form.Label>
									<Form.Control
										type="text"
										placeholder="Make"
										value={make}
										onChange={(e) => setMake(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Model</Form.Label>
									<Form.Control
										type="text"
										placeholder="Model"
										value={model}
										onChange={(e) => setModel(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Year</Form.Label>
									<Form.Control
										type="number"
										placeholder="Year"
										value={year}
										onChange={(e) => setyear(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col sm={12} xl={7}>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Mileage</Form.Label>
									<Form.Control
										type="number"
										placeholder="Mileage"
										value={mileage}
										onChange={(e) => setMileage(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col sm={12} xl={5}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Add Client</Form.Label>

									<div className="position-relative">
										<Form.Control type="text" placeholder="Search Client" value={searchTerm} onChange={handleInputChange} />
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
									<Dropdown onSelect={handleOptionSelect} show={showList}>
										<Dropdown.Menu>
											{
												filteredOptions?.map((item) => (
													<Dropdown.Item key={item._id} eventKey={`${item._id}_${item.name}`}>{item.name}</Dropdown.Item>
												))
											}
										</Dropdown.Menu>
									</Dropdown>
								</Form.Group>
								{/* <ClientModal onVehicleAdded={(e) => {
									setSearchTerm('')
								}} /> */}
							</Col>
						</Row>
						<Row className="row-cols-1 row-cols-lg-2">
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Fuel Type</Form.Label>
									<Form.Control
										type="text"
										placeholder="Fuel Type"
										value={fuelType}
										onChange={(e) => setFuelType(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Color</Form.Label>
									<Form.Control
										type="text"
										placeholder="Color"
										value={color}
										onChange={(e) => setColor(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>

						<div>
							<div className="my-2 d-inline-flex">
								<Button variant="primary" type="submit">
									Add Vehicle
								</Button>
								<Button variant="outline-primary" className="mx-2  d-inline-flex align-items-center gap-2" onClick={() => document.getElementById('fileInput').click()}>
									<i class="icon-upload"></i>
									Attach File
								</Button>
								<Form.Control
									id="fileInput"
									type="file"
									hidden
									multiple
									onChange={handleFileChange}
								/>
								{selectedFiles && <small>{selectedFiles?.map((file) => file?.name)}</small>}
								<Button variant="secondary" onClick={handleClose}>
									Cancel
								</Button>
							</div>

						</div>
					</Form>
				</Modal.Body>
			</Modal >
		</>
	);
};

export default VehicleModal;
