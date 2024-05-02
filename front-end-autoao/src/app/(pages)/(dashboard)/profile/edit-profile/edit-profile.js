"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";

const EditProfile = ({ currentUser }) => {
	console.log('IN EDIT', currentUser)
	const [show, setShow] = useState(false);
	const [firstName, setFirstName] = useState(currentUser?.firstName);
	const [phoneNumber, setPhoneNumber] = useState(currentUser?.phoneNumber);
	const [address, setAddress] = useState(currentUser?.address);
	const [street, setStreet] = useState(address?.street);
	const [locality, setLocality] = useState(address?.locality);
	const [city, setCity] = useState(address?.city);
	const [postalCode, setPostCode] = useState(address?.postalCode);

	const handleShow = () => setShow(true);

	const handleClose = () => {
		setShow(false);
		resetForm();
	};

	const resetForm = () => {
		setFirstName(currentUser?.firstName || "");
		setPhoneNumber(currentUser?.phoneNumber || "");
		setStreet(address?.street || "");
		setLocality(address?.locality || "");
		setCity(address?.city || "");
		setPostCode(address?.postalCode || "");
		setAddress(currentUser?.address || {});
	};

	// Handle form submission to update user information
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Update user information on the server
		const response = await apiService.put(`${constants.createAdmin}/${currentUser._id}`, {
			firstName,
			phoneNumber,
			address: {
				street,
				locality,
				city,
				postalCode
			}
		});

		// Refresh user information in the client
		if (response) {
			refreshUser();
			handleClose();
		}
	};

	return (
		<>
			<Button variant="outline-primary fw-medium" onClick={handleShow}>
				Edit Profile information
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Edit Profile Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Name"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicPhoneNumber">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										type="text"
										placeholder="Phone Number"
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
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
											value={street}
											onChange={(e) => setStreet(e.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicLocality">
										<Form.Label>Locality</Form.Label>
										<Form.Control
											type="text"
											placeholder="Locality"
											value={locality}
											onChange={(e) => setLocality(e.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicCity">
										<Form.Label>City/ Post Town</Form.Label>
										<Form.Control
											type="text"
											placeholder="City/ Post Town"
											value={city}
											onChange={(e) => setCity(e.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicPostCode">
										<Form.Label>Post Code</Form.Label>
										<Form.Control
											type="text"
											placeholder="Post Code"
											value={postalCode}
											onChange={(e) => setPostCode(e.target.value)}
										/>
									</Form.Group>
								</Col>
							</Row>
						</div>
						<div className="my-3">
							<Button type="submit" variant="primary">
								Update Information
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

export default EditProfile;
