"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const CreateGarage = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
					<Form>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Add Admin</Form.Label>
							<Form.Control type="text" placeholder="Search Admin Here" />
						</Form.Group>
						<Row>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Garage Name</Form.Label>
									<Form.Control type="text" placeholder="Garage Name" />
								</Form.Group>
							</Col>
							<Col>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Contact Number</Form.Label>
									<Form.Control type="text" placeholder="Contact Number" />
								</Form.Group>
							</Col>
						</Row>

						<div className="bg-gray-100 p-3 rounded-ai">
							<h6 className="mb-3">Address</h6>
							<Row>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>Street name</Form.Label>
										<Form.Control type="text" placeholder="Street name" />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Locality</Form.Label>
										<Form.Control type="number" placeholder="Locality" />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>City/ Post Town</Form.Label>
										<Form.Control type="text" placeholder="City/ Post Town" />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Post Code</Form.Label>
										<Form.Control type="number" placeholder="Post Code" />
									</Form.Group>
								</Col>
							</Row>
						</div>

					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Create Garage
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CreateGarage;
