"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, Dropdown } from "react-bootstrap";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";

const EditGarageOwner = ({ owner, onOwnerUpdated }) => {
	const [show, setShow] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	// Initialize state with owner data when the component mounts or owner prop changes
	useEffect(() => {
		if (owner) {
			setFirstName(owner.firstName);
			setLastName(owner.lastName);
			setEmail(owner.email);
			setPhoneNumber(owner.phoneNumber);
		}
	}, [owner]);

	const handleClose = () => {
		setShow(false);
	};

	const handleShow = () => {
		setShow(true);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Updating garage owner...');

		// Send a request to update the owner's data
		const response = await apiService.put(`${constants.createAdmin}/${owner._id}`, {
			email,
			phoneNumber,
			firstName,
			lastName,
			roles: "ADMIN"
		});

		if (response) {
			console.log('response', response);
			setShow(false);
			onOwnerUpdated();

		}
	};

	return (
		<>
			<Dropdown.Item
				onClick={handleShow}
				className="d-flex align-items-center gap-2"
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
				Edit Admin
			</Dropdown.Item>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Edit Garage Owner</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row className="row-cols-1 row-cols-lg-2">
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email Address</Form.Label>
									<Form.Control
										type="email"
										placeholder="Email Address"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicPhone">
									<Form.Label>Contact Number</Form.Label>
									<Form.Control
										type="number"
										placeholder="Contact Number"
										value={phoneNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
									/>
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicFirstName">
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
								<Form.Group className="mb-3" controlId="formBasicLastName">
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
						<div className="my-2">
							<Button variant="primary" type="submit">
								Update Owner
							</Button>
							<Button variant="secondary" className="mx-2" onClick={handleClose}>
								Cancel
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditGarageOwner;
