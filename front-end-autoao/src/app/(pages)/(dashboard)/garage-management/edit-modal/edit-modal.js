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
			if (searchResult.length > 0) {
				setShowList(true);
			}
		} else if (filteredOptions.length > 0) {
			setShowList(false);
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
			{/* <Button variant="outline-primary fw-medium" onClick={handleShow}>
				Edit Garage
			</Button> */}

			<Dropdown.Item
				className="d-flex align-items-center gap-2"
				onClick={handleShow}
			>
				<svg
					className="edit-svg-btn"
					width={16}
					height={16}
					viewBox="0 0 17 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M12.3965 0.146569C12.5917 -0.0486935 12.9083 -0.0486935 13.1036 0.146569L16.1036 3.14657C16.2988 3.34183 16.2988 3.65841 16.1036 3.85368L6.10357 13.8537C6.05569 13.9016 5.99858 13.9392 5.93571 13.9644L0.93571 15.9644C0.750001 16.0386 0.537892 15.9951 0.396461 15.8537C0.25503 15.7122 0.211493 15.5001 0.285776 15.3144L2.28578 10.3144C2.31092 10.2516 2.34858 10.1944 2.39646 10.1466L12.3965 0.146569ZM11.4571 2.50012L13.75 4.79302L15.0429 3.50012L12.75 1.20723L11.4571 2.50012ZM13.0429 5.50012L10.75 3.20723L4.25001 9.70723V10.0001H4.75001C5.02616 10.0001 5.25001 10.224 5.25001 10.5001V11.0001H5.75001C6.02616 11.0001 6.25001 11.224 6.25001 11.5001V12.0001H6.54291L13.0429 5.50012ZM3.28167 10.6756L3.17614 10.7811L1.64754 14.6026L5.46903 13.074L5.57456 12.9685C5.38496 12.8974 5.25001 12.7145 5.25001 12.5001V12.0001H4.75001C4.47387 12.0001 4.25001 11.7763 4.25001 11.5001V11.0001H3.75001C3.53561 11.0001 3.35272 10.8652 3.28167 10.6756Z"
						fill="black"
					/>
				</svg>
				Edit
			</Dropdown.Item>

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
									<Form.Group className="mb-3" controlId="formBasicpostalCode">
										<Form.Label>Post Code</Form.Label>
										<Form.Control
											type="number"
											placeholder="Post Code"
											value={location?.postalCode}
											onChange={(e) => setLocation({ ...location, postalCode: e.target.value })}
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
