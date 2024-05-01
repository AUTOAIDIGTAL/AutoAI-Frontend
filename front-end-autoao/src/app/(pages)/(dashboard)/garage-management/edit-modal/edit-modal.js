// import { useState, useEffect } from "react";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";
// import { Row, Col } from "react-bootstrap";
// import { apiService } from "@/services";
// import { constants } from "../constant";
// import Dropdown from "react-bootstrap/Dropdown";
// import PhoneInput from "react-phone-number-input";
// import 'react-phone-number-input/style.css'

// const EditGarage = ({ garageData, onGarageUpdated }) => {
// 	const [show, setShow] = useState(false);
// 	const [garageAdmin, setGarageAdmin] = useState(garageData.owner);
// 	const [garageName, setGarageName] = useState(garageData.name);
// 	const [phoneNumber, setPhoneNumber] = useState(garageData.phoneNumber);
// 	const [location, setLocation] = useState(garageData.address);
// 	const [searchTerm, setSearchTerm] = useState('');
// 	const [filteredOptions, setFilteredOptions] = useState([]);
// 	const [showList, setShowList] = useState(false);

// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);

// 	useEffect(() => {
// 		// Set initial state from garageData prop
// 		setGarageAdmin(garageData.owner);
// 		setGarageName(garageData.name);
// 		setPhoneNumber(garageData.phoneNumber);
// 		setLocation(garageData.address);
// 	}, [garageData]);

// 	const handleInputChange = async (event) => {
// 		setSearchTerm(event.target.value);
// 		if (searchTerm?.length > 3) {
// 			const searchResult = await apiService.get(`${constants.getAdmins}?search=${searchTerm}`);
// 			setFilteredOptions(searchResult);
// 		}
// 	};

// 	const handleOptionSelect = (selectedOption) => {
// 		const [id, name] = selectedOption.split('_');
// 		setGarageAdmin(id);
// 		setSearchTerm(name);
// 		setShowList(false);
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		console.log('Updating garage...',);

// 		const response = await apiService.put(`${constants.updateGarage}/${garageData.id}`, {
// 			owner: garageAdmin,
// 			name: garageName,
// 			phoneNumber,
// 			address: location
// 		});

// 		if (response) {
// 			setShow(false);
// 			onGarageUpdated();
// 			setFilteredOptions([]);
// 			setGarageAdmin(garageData.owner);
// 			setGarageName(garageData.name);
// 			setPhoneNumber(garageData.phoneNumber);
// 			setLocation(garageData.address);
// 			setSearchTerm('');
// 		}
// 	};

// 	return (
//         <>
// 			<Button variant="outline-primary fw-medium" onClick={handleShow}>
// 				Edit Garage
// 			</Button>

// 			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
// 				<Modal.Header closeButton>
// 					<Modal.Title>Edit Garage</Modal.Title>
// 				</Modal.Header>
// 				<Modal.Body>
// 					<Form onSubmit={handleSubmit}>
// 						<Form.Group className="mb-3" controlId="formBasicPassword">
// 							<Form.Label>Edit Admin</Form.Label>
// 							<div>
// 								<Form.Control
// 									type="text"
// 									value={searchTerm}
// 									onChange={handleInputChange}
// 									placeholder="Search..."
// 									onClick={() => setShowList(!showList)}
// 								/>

// 								<Dropdown onSelect={handleOptionSelect} show={showList}>
// 									<Dropdown.Menu>
// 										{
// 											filteredOptions?.map((item) => (
// 												<Dropdown.Item key={item._id} eventKey={`${item._id}_${item.firstName} ${item.lastName}`}>
// 													{item.firstName} {item.lastName}
// 												</Dropdown.Item>
// 											))
// 										}
// 									</Dropdown.Menu>
// 								</Dropdown>
// 							</div>
// 						</Form.Group>

// 						<Row>
// 							<Col>
// 								<Form.Group className="mb-3" controlId="formBasicName">
// 									<Form.Label>Garage Name</Form.Label>
// 									<Form.Control
// 										type="text"
// 										placeholder="Garage Name"
// 										value={garageName}
// 										onChange={(e) => setGarageName(e.target.value)}
// 									/>
// 								</Form.Group>
// 							</Col>

// 							<Col>
// 								<Form.Group className="mb-3" controlId="formBasicEmail">
// 									<Form.Label>Contact Number</Form.Label>
// 									<PhoneInput
// 										placeholder="Contact Number"
// 										value={phoneNumber}
// 										onChange={setPhoneNumber}
// 									/>
// 								</Form.Group>
// 							</Col>
// 						</Row>

// 						<div className="bg-gray-100 p-3 rounded-ai">
// 							<h6 className="mb-3">Address</h6>
// 							<Row>
// 								<Col lg={6}>
// 									<Form.Group className="mb-3" controlId="formBasicName">
// 										<Form.Label>Street name</Form.Label>
// 										<Form.Control
// 											type="text"
// 											placeholder="Street name"
// 											value={location.street}
// 											onChange={(e) => setLocation({ ...location, street: e.target.value })}
// 										/>
// 									</Form.Group>
// 								</Col>

// 								<Col lg={6}>
// 									<Form.Group className="mb-3" controlId="formBasicEmail">
// 										<Form.Label>Country</Form>
//                                     >
// 										<Form.Control
// 											type="text"
// 											placeholder="Country"
// 											value={location.country}
// 											onChange={(e) => setLocation({ ...location, country: e.target.value })}
// 										/>
// 									</Form.Group>
// 								</Col>

// 								<Col lg={6}>
// 									<Form.Group className="mb-3" controlId="formBasicName">
// 										<Form.Label
