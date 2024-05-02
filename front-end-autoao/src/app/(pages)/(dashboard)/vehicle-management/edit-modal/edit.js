import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row, Col, Dropdown } from 'react-bootstrap';
import { constants } from '../../garage-management/constant';
import { apiService } from '@/services';

const EditModal = ({ vehicle, onVehicleUpdated }) => {

	// vehicle', vehicle);

	const [show, setShow] = useState(false);
	const [vinNumber, setVinNumber] = useState('');
	const [regNumber, setRegNumber] = useState('');
	const [make, setMake] = useState('');
	const [model, setModel] = useState('');
	const [year, setYear] = useState('');
	const [mileage, setMileage] = useState('');
	const [client, setClient] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [showList, setShowList] = useState(false);
	const [selectedFiles, setSelectedFiles] = useState(null);

	useEffect(() => {
		if (vehicle) {
			setVinNumber(vehicle.vinNumber);
			setRegNumber(vehicle.regPlate);
			setMake(vehicle.make);
			setModel(vehicle.model);
			setYear(vehicle.year);
			setMileage(vehicle.mileage);
			setClient(vehicle.owner);
			setSearchTerm(vehicle.owner?.name);
		}
	}, [vehicle]);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// Fetch data based on search term
	const handleInputChange = async (event) => {
		setSearchTerm(event.target.value);
		if (searchTerm?.length > 3) {
			const searchResult = await apiService.get(`${constants.searchCustomer}?search=${searchTerm}`);
			setFilteredOptions(searchResult);
		}
	};

	const handleOptionSelect = (selectedOption) => {
		// selected option', selectedOption);
		const [clientId, clientName] = selectedOption.split('_');
		setClient(clientId);
		setSearchTerm(clientName);
		setShowList(false);
	};

	// Handle file change
	const handleFileChange = (event) => {
		setSelectedFiles([...event.target.files]);
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// submitting form');

		if (!vinNumber || !regNumber || !make || !model || !year || !mileage) {
			console.error('Please fill in all the required fields.');
			return;
		}

		const data = new FormData();
		data.append('vinNumber', vinNumber);
		data.append('regPlate', regNumber);
		data.append('make', make);
		data.append('model', model);
		data.append('year', year);
		data.append('mileage', mileage);
		if (client._id) data.append('owner', client._id);
		if (selectedFiles) {
			selectedFiles.forEach((file, index) => data.append(`files[${index}]`, file));
		}

		// Update existing vehicle
		const response = await apiService.put(`${constants.vehicle}/${vehicle._id}`, data);

		if (response) {
			// Vehicle updated successfully:', response);
			onVehicleUpdated(response);
			setShow(false);
		}
	};

	return (
		<>
			<Button variant="outline-primary" onClick={handleShow}>
				Edit Vehicle
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Edit Vehicle</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row className="row-cols-1 row-cols-lg-2">
							<Col>
								<Form.Group className="mb-3" controlId="formVinNumber">
									<Form.Label>VIN Number</Form.Label>
									<Form.Control
										type="text"
										placeholder="VIN Number"
										value={vinNumber}
										onChange={(e) => setVinNumber(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formRegPlate">
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
								<Form.Group className="mb-3" controlId="formMake">
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
								<Form.Group className="mb-3" controlId="formModel">
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
								<Form.Group className="mb-3" controlId="formYear">
									<Form.Label>Year</Form.Label>
									<Form.Control
										type="number"
										placeholder="Year"
										value={year}
										onChange={(e) => setYear(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col sm={12} xl={7}>
								<Form.Group className="mb-3" controlId="formMileage">
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
								<Form.Group className="mb-3" controlId="formClient">
									<Form.Label>Client</Form.Label>

									<div className="position-relative">
										<Form.Control
											type="text"
											placeholder="Search Client"
											value={searchTerm}
											onChange={handleInputChange}
											onClick={() => setShowList(!showList)}
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
									<Dropdown onSelect={handleOptionSelect} show={showList}>
										<Dropdown.Menu>
											{filteredOptions.map((item) => (
												<Dropdown.Item key={item._id} eventKey={`${item._id}_${item.name}`}>
													{item.name}
												</Dropdown.Item>
											))}
										</Dropdown.Menu>
									</Dropdown>
								</Form.Group>
							</Col>
						</Row>
						<div>
							<div className="my-2">
								<Button variant="primary" type="submit">
									Save Changes
								</Button>
								<Button
									variant="outline-primary"
									className="mx-2"
									onClick={() => document.getElementById('fileInput').click()}
								>
									<svg
										className="me-2"
										width={16}
										height={14}
										viewBox="0 0 16 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M0.5 8.90002C0.776142 8.90002 1 9.12388 1 9.40002V11.9C1 12.4523 1.44772 12.9 2 12.9H14C14.5523 12.9 15 12.4523 15 11.9V9.40002C15 9.12388 15.2239 8.90002 15.5 8.90002C15.7761 8.90002 16 9.12388 16 9.40002V11.9C16 13.0046 15.1046 13.9 14 13.9H2C0.895431 13.9 0 13.0046 0 11.9V9.40002C0 9.12388 0.223858 8.90002 0.5 8.90002Z"
											fill="#1474FB"
										/>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M7.64645 0.146447C7.84171 -0.0488155 8.15829 -0.0488155 8.35355 0.146447L11.3536 3.14645C11.5488 3.34171 11.5488 3.65829 11.3536 3.85355C11.1583 4.04882 10.8417 4.04882 10.6464 3.85355L8.5 1.70711V10.5C8.5 10.7761 8.27614 11 8 11C7.72386 11 7.5 10.7761 7.5 10.5V1.70711L5.35355 3.85355C5.15829 4.04882 4.84171 4.04882 4.64645 3.85355C4.45118 3.65829 4.45118 3.34171 4.64645 3.14645L7.64645 0.146447Z"
											fill="#1474FB"
										/>
									</svg>
									Attach File
								</Button>
								<Form.Control
									id="fileInput"
									type="file"
									hidden
									multiple
									onChange={handleFileChange}
								/>
								{selectedFiles && <small>{selectedFiles.map((file) => file.name).join(', ')}</small>}
							</div>
							<Button variant="secondary" onClick={handleClose}>
								Cancel
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal >
		</>
	);
};

export default EditModal;