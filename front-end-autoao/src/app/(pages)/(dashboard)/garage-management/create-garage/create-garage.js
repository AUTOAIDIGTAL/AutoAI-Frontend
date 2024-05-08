import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { apiService } from "@/services";
import { constants } from "../constant";
import Dropdown from "react-bootstrap/Dropdown";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'


const CreateGarage = ({ onGarageAdded }) => {
	const [show, setShow] = useState(false);
	const [garageAdmin, setGarageAdmin] = useState(null);
	const [garageName, setGarageName] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [location, setLocation] = useState({});
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
		setSearchTerm(name)
		setShowList(false);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const response = await apiService.post(constants.createGarage, {
			owner: garageAdmin,
			name: garageName,
			phoneNumber,
			address: location
		});

		if (response) {
			setShow(false);
			onGarageAdded()
			setFilteredOptions([])
			setGarageAdmin(null)
			setGarageName(null)
			setPhoneNumber(null)
			setLocation(null)
			setSearchTerm(null)
		}
	};

	return (
		<>
			<Button variant="outline-primary fw-medium" onClick={handleShow}>
				Create New Garage
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Create a New Garage</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Add Admin</Form.Label>
							<div>
								<Form.Control type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search..." />

								<Dropdown onSelect={handleOptionSelect} show={showList}>
									<Dropdown.Menu>
										{
											filteredOptions?.map((item) => (
												<Dropdown.Item key={item._id} eventKey={`${item._id}_${item.firstName} ${item.lastName}`}>{item.firstName} {item.lastName}</Dropdown.Item>
											))
										}
									</Dropdown.Menu>
								</Dropdown>
							</div>

						</Form.Group>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Garage Name</Form.Label>
									<Form.Control type="text" placeholder="Garage Name" value={garageName} onChange={(e) => setGarageName(e.target.value)} />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Contact Number</Form.Label>
									<Form.Control type="number" placeholder="Contact Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

								</Form.Group>
							</Col>
						</Row>

						<div className="bg-gray-100 p-3 rounded-ai">
							<h6 className="mb-3">Address</h6>
							<Row>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>Street name</Form.Label>
										<Form.Control type="text" placeholder="Street name" value={location?.street} onChange={(e) => setLocation({ ...location, street: e.target.value })} />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Country</Form.Label>
										<Form.Control type="text" placeholder="Country" value={location?.country} onChange={(e) => setLocation({ ...location, country: e.target.value })} />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>City/ Post Town</Form.Label>
										<Form.Control type="text" placeholder="City/ Post Town" value={location?.city} onChange={(e) => setLocation({ ...location, city: e.target.value })} />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Post Code</Form.Label>
										<Form.Control type="number" placeholder="Post Code" value={location?.postCode} onChange={(e) => setLocation({ ...location, postCode: e.target.value })} />
									</Form.Group>
								</Col>
							</Row>
						</div>
						<div className="my-3">
							<Button type="submit" variant="primary" className="">
								Create Garage
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

export default CreateGarage;

