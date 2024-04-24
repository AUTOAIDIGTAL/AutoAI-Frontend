"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const CreateModal = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary fw-medium" onClick={handleShow}>
				Add New Customer
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Add new client</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Row>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Name" />
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Number</Form.Label>
									<Form.Control type="text" placeholder="Number" />
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Email</Form.Label>
									<Form.Control type="text" placeholder="Email" />
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Company</Form.Label>
									<Form.Control type="text" placeholder="Company" />
								</Form.Group>
							</Col>

							
							<Col xs={12}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Vehicle Reg</Form.Label>
									<Form.Control type="text" placeholder="Vehicle Reg" />
								</Form.Group>
							</Col>
						</Row>
						<Link className="btn btn-link p-0 mb-3 d-inline-block" href="javascript:void(0);">Add new vehicle</Link>
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
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>City/ Post Town</Form.Label>
										<Form.Control type="text" placeholder="City/ Post Town" />
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>County</Form.Label>
										<Form.Control type="number" placeholder="County" />
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
					Add Client
					</Button>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CreateModal;
