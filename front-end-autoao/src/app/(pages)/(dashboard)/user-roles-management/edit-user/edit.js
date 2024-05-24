import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const UserForm = ({ userData, onUserAdded, onUserUpdated }) => {
	const [show, setShow] = useState(false);
	const [user, setUser] = useState(userData);
	const [firstName, setFirstName] = useState(user ? user.firstName : "");
	const [lastName, setLastName] = useState(user ? user.lastName : "");
	const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : "");
	const [email, setEmail] = useState(user ? user.email : "");
	const { user: currentUser } = useCurrentUser();
	// Separate state variables for each role
	const [isMechanic, setIsMechanic] = useState(false);
	const [isManager, setIsManager] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		if (user) {
			setFirstName(user.firstName);
			setLastName(user.lastName);
			setPhoneNumber(user.phoneNumber);
			setEmail(user.email);
			setIsMechanic(user.roles.includes("MECHANIC"));
			setIsManager(user.roles.includes("MANAGER"));
		}
	}, [user]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('IS MANAGER', isManager)
		console.log('IS MECHANIC', isMechanic)
		const formData = new FormData();
		formData.append("firstName", firstName);
		formData.append("lastName", lastName);
		formData.append("phoneNumber", phoneNumber);
		formData.append("email", email);

		// Combine separate state variables into an array of roles
		const roles = [];

		// Add roles to form data
		formData.append("roles", user.roles.join(","));

		let response;
		if (user) {
			// Edit mode: update the existing user
			response = await apiService.put(
				`${constants.createAdmin}/${user._id}`,
				formData
			);
			if (response) {
				// User updated successfully:', response);
				setShow(false);
				onUserUpdated();
			}
		} else {
			response = await apiService.post(constants.createAdmin, formData);
			if (response) {
				setShow(false);
				onUserAdded();
			}
		}
	};

	const handleRoleToggle = (role) => {
		const updatedRoles = user.roles.includes(role)
			? user.roles.filter((r) => r !== role)
			: [...user.roles, role];
		setUser({ ...user, roles: updatedRoles });
	};


	return (
		<>
			<div onClick={handleShow}>
				{user ? (
					<div className="d-inline-flex align-items-center">
						<i className="icon-pencil text-primary pe-1"></i> Edit User
					</div>
				) : (
					<div className="d-inline-flex align-items-center">
						<i className="icon-plus text-primary pe-1"></i> Add New User
					</div>
				)}
			</div>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>{user ? "Edit User" : "Add New User"}</Modal.Title>
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
								<Form.Group className="mb-3" controlId="formLastName">
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
								<Form.Group className="mb-3" controlId="formEmail">
									<Form.Label>Email</Form.Label>
									<Form.Control
										type="email"
										placeholder="Email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										disabled
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
						<Row>
							<Col>
								<Form.Label className="my-2">Roles</Form.Label>
							</Col>
							<Col className="col-auto">
								<div className="bg-gray-100 gap-4 py-3 px-4 rounded-ai d-flex justify-content-between align-items-center">
									<Form.Group className="m-0 d-flex align-items-center gap-3">
										<Form.Check
											type="checkbox"
											label="Mechanic"
											checked={isMechanic}
											onChange={() => handleRoleToggle("MECHANIC")}
											id={`default-mechanic`}
										/>
										{currentUser?.roles?.includes("ADMIN") && <Form.Check
											type="checkbox"
											label="Manager"
											checked={isManager}
											onChange={() => handleRoleToggle("MANAGER")}
											id={`default-manager`}
										/>}
									</Form.Group>
								</div>
							</Col>
						</Row>
						<div className="d-flex align-items-center gap-1">
							<Button variant="primary" type="submit" onClick={handleSubmit}>
								{user ? "Update" : "Add"}
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

export default UserForm;
