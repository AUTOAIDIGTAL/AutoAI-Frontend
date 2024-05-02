import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
import { apiService } from "@/services";
import { constants } from "../constant";

const EditGarage = ({ data, onGarageUpdated }) => {
	console.log('data', data);
	const [show, setShow] = useState(false);
	const [garageAdmin, setGarageAdmin] = useState(data.owner);
	const [garageName, setGarageName] = useState(data.name);
	const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
	const [location, setLocation] = useState(data.address);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [showList, setShowList] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInputChange = async (event) => {
		setSearchTerm(event.target.value);
		if (searchTerm?.length > 3) {
			const searchResult = await apiService.get(`${constants.getAdmins}?search=${searchTerm}`);
			setFilteredOptions(searchResult);
		}
	};

	const handleOptionSelect = (selectedOption) => {
		const [id, name] = selectedOption.split('_');
		setGarageAdmin(id);
		setSearchTerm(name);
		setShowList(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Updating data...',);

		// Send a PUT request to update the data's details
		const response = await apiService.put(`${constants.createGarage}/${data._id}`, {
			owner: garageAdmin._id,
			name: garageName,
			phoneNumber,
			address: location
		});

		if (response) {
			setShow(false);
			onGarageUpdated(response); // Notify parent component of the update
		}
	};

	return (
		<>
			<Button variant="outline-primary fw-medium" onClick={handleShow}>
				Edit Garage
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Edit Garage</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicAdmin">
							<Form.Label>Edit Admin</Form.Label>
							<div>
								<Form.Control
									type="text"
									value={searchTerm || `${garageAdmin?.firstName} ${garageAdmin?.lastName}`}
									onChange={handleInputChange}
									placeholder="Search..."
									onClick={() => setShowList(!showList)}
								/>

								<Dropdown onSelect={handleOptionSelect} show={showList}>
									<Dropdown.Menu>
										{filteredOptions?.map((item) => (
											<Dropdown.Item key={item._id} eventKey={`${item._id}_${item.firstName} ${item.lastName}`}>
												{item.firstName} {item.lastName}
											</Dropdown.Item>
										))}
									</Dropdown.Menu>
								</Dropdown>
							</div>
						</Form.Group>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Garage Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Garage Name"
										value={garageName}
										onChange={(e) => setGarageName(e.target.value)}
									/>
								</Form.Group>
							</Col>
							{/* <Col>
								<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
									<Form.Label>Contact Number</Form.Label>
									<PhoneInput
										international
										defaultCountry="US"
										value={phoneNumber}
										onChange={setPhoneNumber}
										placeholder="Contact Number"
									/>
								</Form.Group>
							</Col> */}
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Contact Number</Form.Label>
									<Form.Control type="number" placeholder="Contact Number" value={phoneNumber}
										onChange={(e) => { setPhoneNumber(e.target.value) }}
									/>
								</Form.Group>
							</Col>
						</Row>
						<div className="bg-gray-100 p-3 rounded-ai">
							<h6 className="mb-3">Address</h6>
							<Row>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicStreet">
										<Form.Label>Street Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Street Name"
											value={location?.street}
											onChange={(e) => setLocation({ ...location, street: e.target.value })}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicCountry">
										<Form.Label>Country</Form.Label>
										<Form.Control
											type="text"
											placeholder="Country"
											value={location?.country}
											onChange={(e) => setLocation({ ...location, country: e.target.value })}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicCity">
										<Form.Label>City/ Post Town</Form.Label>
										<Form.Control
											type="text"
											placeholder="City/ Post Town"
											value={location?.city}
											onChange={(e) => setLocation({ ...location, city: e.target.value })}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicPostCode">
										<Form.Label>Post Code</Form.Label>
										<Form.Control
											type="number"
											placeholder="Post Code"
											value={location?.postalCode}
											onChange={(e) => setLocation({ ...location, postCode: e.target.value })}
										/>
									</Form.Group>
								</Col>
							</Row>
						</div>
						<div className="my-3">
							<Button type="submit" variant="primary">
								Update Garage
							</Button>
							<Button variant="secondary" onClick={handleClose}>
								Cancel
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditGarage;
