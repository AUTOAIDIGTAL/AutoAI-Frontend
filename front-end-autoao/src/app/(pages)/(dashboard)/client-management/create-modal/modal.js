"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, Dropdown } from "react-bootstrap";
import Link from "next/link";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";

const CreateModal = ({ handleRefetch }) => {
	const [name, setName] = useState(null);
	const [company, setCompany] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [email, setEmail] = useState(null);
	const [vehicleIds, setVehicle] = useState([]);
	const [location, setLocation] = useState({ street: '', city: '', country: '', postCode: '' });
	const [show, setShow] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [showList, setShowList] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInputChange = async (event) => {
		setSearchTerm(event.target.value);
		if (searchTerm?.length > 2) {
			const searchResult = await apiService.get(`${constants.searchVehicle}?search=${searchTerm}`);
			setFilteredOptions(searchResult);
		}
	};

	const handleOptionSelect = (selectedOption) => {
		console.log('selected option', selectedOption);
		const [vehicleId, vehicleName] = selectedOption.split('_');
		setVehicle([...vehicleIds, vehicleId]);
		setSearchTerm(vehicleName);
		setShowList(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Creating new Job...', name, company, phoneNumber, email, vehicleIds, location);

		const response = await apiService.post(constants.customer, {
			name, company, phoneNumber, email, vehicleIds, address: location
		});

		if (response) {
			setName(null);
			setCompany(false);
			setPhoneNumber(null);
			setEmail(null);
			setVehicle(null);
			setLocation({ street: '', city: '', country: '', postCode: '' });
			handleRefetch()
			setShow(false)
		}
	};

	useEffect

	return (
		<>
			<Button variant="primary fw-medium" onClick={handleShow}>
				Add New Customer
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Add new client</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Number</Form.Label>
									<Form.Control type="tel" placeholder="Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasic">
									<Form.Label>Company</Form.Label>
									<Form.Control type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} />
								</Form.Group>
							</Col>


							<Col xs={12}>
								<Form.Group className="mb-3" controlId="formBasicVehicle">
									<Form.Label>Add Vehicle</Form.Label>

									<div className="position-relative">
										<Form.Control type="text" placeholder="Search Client" value={searchTerm} onChange={handleInputChange} onClick={() => setShowList(!showList)} />
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
													<Dropdown.Item key={item._id} eventKey={`${item._id}_${item.regPlate}`}>{item.regPlate}</Dropdown.Item>
												))
											}
										</Dropdown.Menu>
									</Dropdown>
								</Form.Group>
							</Col>
						</Row>
						<Link className="btn btn-link p-0 mb-3 d-inline-block" href="/vehicle-management">Add new vehicle</Link>
						<div className="bg-gray-100 p-3 rounded-ai">
							<h6 className="mb-3">Address</h6>
							<Row>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>Street name</Form.Label>
										<Form.Control type="text" placeholder="Street name" value={location.street} onChange={(e) => setLocation({ ...location, street: e.target.value })} />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicCountry">
										<Form.Label>Country</Form.Label>
										<Form.Control type="text" placeholder="Country" value={location.country} onChange={(e) => setLocation({ ...location, country: e.target.value })} />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicCity">
										<Form.Label>City/ Post Town</Form.Label>
										<Form.Control type="text" placeholder="City/ Post Town" value={location.city} onChange={(e) => setLocation({ ...location, city: e.target.value })} />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicNumber">
										<Form.Label>Post Code</Form.Label>
										<Form.Control type="number" placeholder="Post Code" value={location.postCode} onChange={(e) => setLocation({ ...location, postCode: e.target.value })} />
									</Form.Group>
								</Col>
							</Row>
						</div>
						<Button variant="primary" type="submit">
							Add Client
						</Button>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
						</Button>
					</Form>
				</Modal.Body>

			</Modal >
		</>
	);
};

export default CreateModal;
