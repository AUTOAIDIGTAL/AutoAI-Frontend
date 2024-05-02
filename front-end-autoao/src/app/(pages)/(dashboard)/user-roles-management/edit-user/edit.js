"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";

const UserForm = ({ user, onUserAdded, onUserUpdated }) => {
	const [show, setShow] = useState(false);
	const [firstName, setFirstName] = useState(user ? user.firstName : "");
	const [lastName, setLastName] = useState(user ? user.lastName : "");
	const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : "");
	const [email, setEmail] = useState(user ? user.email : "");
	const [roles, setRoles] = useState(user ? user.roles : []);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		if (user) {
			// Set initial values for edit mode
			setFirstName(user.firstName);
			setLastName(user.lastName);
			setPhoneNumber(user.phoneNumber);
			setEmail(user.email);
			setRoles(user.roles);
		}
	}, [user]);

	const handleSubmit = async (e) => {
		// e.preventDefault();
		console.log('test')
		const formData = new FormData();
		formData.append("firstName", firstName);
		formData.append("lastName", lastName);
		formData.append("phoneNumber", phoneNumber);
		formData.append("email", email);
		roles.forEach((role) => formData.append("roles", role));

		let response;
		if (user) {
			// Edit mode: update the existing user
			response = await apiService.put(`${constants.createAdmin}/${user._id}`, formData);
			if (response) {
				console.log("User updated successfully:", response);
				setShow(false);
				onUserUpdated();
			}
		} else {
			// Add mode: create a new user
			response = await apiService.post(constants.createAdmin, formData);
			if (response) {
				console.log("User added successfully:", response);
				setShow(false);
				onUserAdded();
			}
		}

		// Reset form fields and close modal
		setFirstName("");
		setLastName("");
		setPhoneNumber("");
		setEmail("");
		setRoles([]);
	};

	const handleRoleChange = (role) => {
		setRoles((prevRoles) => {
			if (prevRoles.includes(role)) {
				return prevRoles.filter((r) => r !== role);
			} else {
				return [...prevRoles, role];
			}
		});
	};

	return (
		<>
			<p onClick={handleShow}>
				{user ? "Edit User" : "Add New User"}
			</p>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>{"Edit User"}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={(e) => { handleSubmit(e) }}>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
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
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Last Name</Form.Label>
									<Form.Control
										type="text"
										placeholder="Last Name"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										type="tel"
										placeholder="Phone Number"
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
									/>
								</Form.Group>
							</Col>
						</Row>
						<Row className="d-flex justify-content-between align-items-center">
							<Col>
								<Form.Label className="my-2">Role(s)</Form.Label>
							</Col>
							<Col className="col-auto">
								<div className="bg-gray-100 gap-4 py-3 px-4 rounded-ai d-flex justify-content-between align-items-center">
									<Form.Group className="m-0" controlId="formBasicCheckbox">
										<Form.Check
											type="checkbox"
											label="Mechanic"
											checked={roles.includes("MECHANIC")}
											onChange={() => handleRoleChange("MECHANIC")}
										/>
									</Form.Group>
									<Form.Group className="m-0" controlId="formBasicCheckbox">
										<Form.Check
											type="checkbox"
											label="Manager"
											checked={roles.includes("MANAGER")}
											onChange={() => handleRoleChange("MANAGER")}
										/>
									</Form.Group>
									{/* Add more checkboxes for additional roles as needed */}
								</div>
							</Col>
						</Row>
						<Button variant="primary" onClick={handleSubmit}>
							Submit
						</Button>
						<Button variant="secondary" onClick={handleClose}>
							Cancel
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default UserForm;
