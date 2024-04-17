"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const AddNewUser = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="outline-primary fw-medium" onClick={handleShow}>
				Add New User
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Add New Employee</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Name" />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Number</Form.Label>
									<Form.Control type="number" placeholder="Number" />
								</Form.Group>
							</Col>
						</Row>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Email</Form.Label>
							<Form.Control type="text" placeholder="Email" />
						</Form.Group>

						<Row className="d-flex justify-content-between align-items-center">
							<Col>
								<Form.Label className="my-2">Role</Form.Label>
							</Col>
							<Col className="col-auto">
								<div className="bg-gray-100 gap-4 py-3 px-4 rounded-ai d-flex justify-content-between align-items-center">
									<Form.Group className="m-0" controlId="formBasicCheckbox">
										<Form.Check type="checkbox" label="Mechanic" />
									</Form.Group>
									<Form.Group className="m-0" controlId="formBasicCheckbox">
										<Form.Check type="checkbox" label="Manager" />
									</Form.Group>
								</div>
							</Col>
						</Row>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Add User
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default AddNewUser;
