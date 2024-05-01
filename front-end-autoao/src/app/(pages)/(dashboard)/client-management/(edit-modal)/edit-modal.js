import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, Dropdown } from "react-bootstrap";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";
import Link from "next/link";

const EditModal = ({ customerId, handleRefetch }) => {
	const [show, setShow] = useState(false);
	const [vehicleIds, setVehicleIds] = useState([]);

	const [customerData, setCustomerData] = useState({
		name: "",
		company: "",
		phoneNumber: "",
		email: "",
		vehicleIds: [],
		address: { street: "", city: "", country: "", postCode: "" },
	});
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOptions, setFilteredOptions] = useState([]);
	const [showList, setShowList] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		if (show && customerId) {
			// Fetch the existing customer data
			apiService
				.get(`${constants.customer}/${customerId}`)
				.then((response) => {
					let vehiclesAdded = response.vehicleIds.map((item) => {
						return { _id: item?._id, regPlate: item?.regPlate };
					});

					// Update the state with the existing customer data
					setCustomerData({
						name: response.name,
						company: response.company,
						phoneNumber: response.phoneNumber,
						email: response.email,
						vehicleIds: vehiclesAdded.map((item) => item._id),
						address: response.address || {
							street: "",
							city: "",
							country: "",
							postCode: "",
						},
					});

					// Update the list of already added vehicle IDs
					setVehicleIds(vehiclesAdded);
				})
				.catch((error) => {
					console.error("Failed to fetch customer data:", error);
				});
		}
	}, [show, customerId]);

	const filteredOptionsIds =
		searchTerm?.length > 2
			? filteredOptions.filter((item) => !vehicleIds.includes(item._id))
			: [];

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCustomerData((prevData) => ({
			...prevData,
			[name]: name === "company" ? value : value,
		}));
	};

	const handleLocationChange = (e) => {
		const { name, value } = e.target;
		setCustomerData((prevData) => ({
			...prevData,
			address: {
				...prevData.address,
				[name]: value,
			},
		}));
	};

	const handleVehicleSearch = async (event) => {
		setSearchTerm(event.target.value);
		if (searchTerm?.length > 2) {
			const searchResult = await apiService.get(
				`${constants.searchVehicle}?search=${searchTerm}`
			);
			setFilteredOptions(searchResult);
		}
	};

	const handleVehicleSelect = (selectedOption) => {
		const [vehicleId, vehicleName] = selectedOption.split("_");
		if (!vehicleIds.includes(vehicleId)) {
			console.log(vehicleId);
			setCustomerData((prevData) => ({
				...prevData,
				vehicleIds: [vehicleId],
			}));
			setSearchTerm(vehicleName);
			setShowList(false);

			// Update the list of already added vehicle IDs
			setVehicleIds((prevVehicleIds) => [...prevVehicleIds, vehicleId]);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const form = e.currentTarget;
		if (form.checkValidity()) {
			const response = await apiService.put(
				`${constants.customer}/${customerId}`,
				customerData
			);
			if (response) {
				handleRefetch();
				setShow(false);
			}
		}
	};

	return (
		<>
			<Button variant="outline-primary" onClick={handleShow}>
				Edit Customer
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Edit Customer</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										name="name"
										placeholder="Name"
										value={customerData.name}
										onChange={handleInputChange}
										required
									/>
									<Form.Control.Feedback type="invalid">
										Please enter a name.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicPhone">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										type="tel"
										name="phoneNumber"
										placeholder="Phone Number"
										value={customerData.phoneNumber}
										onChange={handleInputChange}
										required
									/>
									<Form.Control.Feedback type="invalid">
										Please enter a phone number.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										name="email"
										placeholder="Email"
										value={customerData.email}
										onChange={handleInputChange}
										required
									/>
									<Form.Control.Feedback type="invalid">
										Please enter a valid email address.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicCompany">
									<Form.Label>Company</Form.Label>
									<Form.Control
										type="text"
										name="company"
										placeholder="Company"
										value={customerData.company}
										onChange={handleInputChange}
										required
									/>
									<Form.Control.Feedback type="invalid">
										Please enter a company name.
									</Form.Control.Feedback>
								</Form.Group>
							</Col>
							<Col xs={12}>
								<Form.Group className="mb-3" controlId="formBasicVehicle">
									<Form.Label>Vehicles</Form.Label>

									<div className="position-relative">
										<Form.Control
											type="text"
											placeholder={vehicleIds}
											value={vehicleIds[0]?.regPlate || searchTerm}
											onChange={handleVehicleSearch}
											onClick={() => setShowList(!showList)}
											disabled
											required
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
													d="M11.436 10.7301L13.389 12.6821C13.4801 12.7764 13.5305 12.9027 13.5293 13.0338C13.5282 13.1649 13.4756 13.2903 13.3829 13.383C13.2902 13.4757 13.1648 13.5283 13.0337 13.5294C12.9026 13.5306 12.7763 13.4802 12.682 13.3891L10.729 11.4361C9.45275 12.5295 7.8026 13.0862 6.1248 12.9892C4.44701 12.8922 2.87199 12.1491 1.73024 10.9159C0.588492 9.6827 -0.0312305 8.05519 0.00111371 6.3749C0.0334579 4.69462 0.715354 3.09217 1.90372 1.90381C3.09208 0.715446 4.69453 0.0335495 6.37481 0.00120526C8.0551 -0.031139 9.6826 0.588583 10.9158 1.73033C12.149 2.87208 12.8921 4.4471 12.9891 6.1249C13.0861 7.80269 12.5294 9.45284 11.436 10.7291V10.7301ZM6.5 12c1.459 0 2.857-.58 3.888-1.612C11.919 9.945 12.5 8.546 12.5 7.087s-.58-2.859-1.612-3.888C9.357 2.14 7.959 1.561 6.5 1.561s-2.857.58-3.887 1.612c-1.03 1.029-1.611 2.428-1.611 3.887s.58 2.857 1.612 3.888c1.03 1.031 2.428 1.612 3.887 1.612z"
													fill="#1A202C"
												/>
											</svg>
										</span>
									</div>

									<Dropdown onSelect={handleVehicleSelect} show={showList}>
										<Dropdown.Menu>
											{filteredOptionsIds.map((item) => {
												console.log(vehicleIds);
												const isAlreadyAdded = vehicleIds.includes(item._id);
												console.log("isAlreadyAdded", isAlreadyAdded);
												return (
													<Dropdown.Item
														key={item._id}
														eventKey={`${item._id}_${item.regPlate}`}
														disabled={isAlreadyAdded}
														className={isAlreadyAdded ? "text-muted" : ""}
														title={
															isAlreadyAdded
																? "This vehicle is already added"
																: ""
														}
													>
														{item.regPlate}
														{isAlreadyAdded && <span className="ml-2">✓</span>}
													</Dropdown.Item>
												);
											})}
										</Dropdown.Menu>
									</Dropdown>
									<Form.Control.Feedback type="invalid">
										Please select a vehicle.
									</Form.Control.Feedback>
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
											name="street"
											placeholder="Street Name"
											value={customerData.address.street}
											onChange={handleLocationChange}
											required
										/>
										<Form.Control.Feedback type="invalid">
											Please enter a street name.
										</Form.Control.Feedback>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicCountry">
										<Form.Label>Country</Form.Label>
										<Form.Control
											type="text"
											name="country"
											placeholder="Country"
											value={customerData.address.country}
											onChange={handleLocationChange}
											required
										/>
										<Form.Control.Feedback type="invalid">
											Please enter a country.
										</Form.Control.Feedback>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicCity">
										<Form.Label>City/Post Town</Form.Label>
										<Form.Control
											type="text"
											name="city"
											placeholder="City/Post Town"
											value={customerData.address.city}
											onChange={handleLocationChange}
											required
										/>
										<Form.Control.Feedback type="invalid">
											Please enter a city/post town.
										</Form.Control.Feedback>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicPostCode">
										<Form.Label>Post Code</Form.Label>
										<Form.Control
											type="number"
											name="postCode"
											placeholder="Post Code"
											value={customerData.address.postCode}
											onChange={handleLocationChange}
											required
										/>
										<Form.Control.Feedback type="invalid">
											Please enter a post code.
										</Form.Control.Feedback>
									</Form.Group>
								</Col>
							</Row>
						</div>

						<div className="d-flex justify-content-between">
							<Button variant="primary" type="submit">
								Save Changes
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

export default EditModal;
