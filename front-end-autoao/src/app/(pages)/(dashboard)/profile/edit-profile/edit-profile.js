"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";
import { message } from "antd";

const EditProfile = ({ currentUser, refetchUser }) => {
	const [show, setShow] = useState(false);
	const [firstName, setFirstName] = useState(currentUser?.firstName || "");
	const [phoneNumber, setPhoneNumber] = useState(currentUser?.phoneNumber || "");
	const [address, setAddress] = useState(currentUser?.address || {});

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		message.open({
			type: 'loading',
			content: 'Updating Profile...',
			duration: 0,
		});
		// Update user information on the server
		try {
			const response = await apiService.put(`${constants.createAdmin}/${currentUser._id}`, {
				firstName,
				phoneNumber,
				address: {
					street: address.street,
					city: address.city,
					country: address.country,
					postalCode: address.postalCode,
				}
			});

			// Refresh user information in the client if update is successful
			if (response) {
				message.destroy();
				refetchUser(currentUser?._id);
				handleClose();
				message.success('Profile information updated successfully!', 2.5);
			}
		}
		catch (error) {
			message.destroy();
			message.error(`Update Failed: ${error.message}`, 2.5);
		}
	};

	// Event handler to update the address state when form inputs change
	const handleAddressChange = (field, value) => {
		setAddress((prevAddress) => ({
			...prevAddress,
			[field]: value
		}));
	};

	return (
		<>
			<Button variant="outline-primary fw-medium" onClick={handleShow}>
				Edit Profile Information
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Edit Profile Information</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formFirstName">
									<Form.Label>First Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="First Name"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formPhoneNumber">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										type="number"
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
									<Form.Group className="mb-3" controlId="formStreetName">
										<Form.Label>Street Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Street Name"
											value={address?.street}
											onChange={(e) => handleAddressChange("street", e.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formCountry">
										<Form.Label>Country</Form.Label>
										<Form.Control
											type="text"
											placeholder="Country"
											value={address?.country}
											onChange={(e) => handleAddressChange("country", e.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formCity">
										<Form.Label>City/Post Town</Form.Label>
										<Form.Control
											type="text"
											placeholder="City/Post Town"
											value={address?.city}
											onChange={(e) => handleAddressChange("city", e.target.value)}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formPostCode">
										<Form.Label>Post Code</Form.Label>
										<Form.Control
											type="text"
											placeholder="Post Code"
											value={address?.postCode}
											onChange={(e) => handleAddressChange("postCode", e.target.value)}
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
