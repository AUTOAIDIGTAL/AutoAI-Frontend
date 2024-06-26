"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";
import { message } from "antd";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const AddNewUser = ({ onUserAdded }) => {
	const [show, setShow] = useState(false);
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [email, setEmail] = useState(null);
	const [roles, setRoles] = useState([]);
	const { user: currentUser } = useCurrentUser();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = async (e) => {
		e.preventDefault();
		message.open({
			type: 'loading',
			content: 'Adding User...',
			duration: 0,
		})
		try {
			const formData = new FormData();
			formData.append("firstName", firstName);
			formData.append("lastName", lastName);
			formData.append("phoneNumber", phoneNumber);
			formData.append("email", email);
			// roles.forEach((role) => {
			formData.append("roles", roles.join(","));
			// });

			const response = await apiService.post(constants.createAdmin, formData);

			if (response) {
				// console.log("User added successfully:", response);
				message.destroy();
				message.success('User added successfully!', 2);
				setShow(false);
				onUserAdded();
				setFirstName(null);
				setLastName(null);
				setPhoneNumber(null);
				setEmail(null);
				setRoles([]);
			}
		} catch (error) {
			console.error(error)
			message.destroy();
			error.response.data.errors.forEach((error) => {
				message.error(`Failed to add user: ${JSON.stringify(error)}`, 2);
			})
		}

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
			<Button variant="primary fw-medium d-inline-flex align-items-center" onClick={handleShow}>
				<i class="icon-plus fs-5 me-1"></i>
				Add New User
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Add New Employee</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
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
										placeholder="Last name"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
									/>
								</Form.Group></Col>
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
										type="number"
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
									{currentUser?.roles.includes("ADMIN") && <Form.Group className="m-0" controlId="formBasicCheckbox">
										<Form.Check
											type="checkbox"
											label="Manager"
											checked={roles.includes("MANAGER")}
											onChange={() => handleRoleChange("MANAGER")}
										/>
									</Form.Group>}
									{/* Add more checkboxes for additional roles as needed */}
								</div>
							</Col>
						</Row>
						<div className="d-flex gap-2 pt-3">
							<Button variant="primary" type="submit">
								Add User
							</Button>
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

export default AddNewUser;
