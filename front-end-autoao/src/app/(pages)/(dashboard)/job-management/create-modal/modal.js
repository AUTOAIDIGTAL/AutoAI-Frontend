"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";

const CreateModal = ({ onJobAdded }) => {
	const [show, setShow] = useState(false);
	const [name, setName] = useState(null);
	const [time, setTime] = useState(null);
	const [description, setDescription] = useState(null);
	const [cost, setCost] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Creating new Job...',);

		const response = await apiService.post(constants.jobs, {
			name, time, description, cost
		});

		if (response) {
			console.log('response', response);
			setShow(false);
			onJobAdded(response)
			setName(null)
			setCost(null)
			setTime(null)
			setDescription(null)
		}
	};

	return (
		<>
			<Button variant="btn btn-primary fw-medium" onClick={handleShow}>
				Create Job
			</Button>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Create New Job</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Job Name</Form.Label>
							<Form.Control type="text" placeholder="Job Name" value={name} onChange={(e) => {
								setName(e.target.value)
							}} />
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea" className="p-2" rows={6} value={description} onChange={(e) => {
								setDescription(e.target.value)
							}} />
						</Form.Group>
						<Row>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicName">
									<Form.Label>Job Cost</Form.Label>
									<Form.Control type="number" min={1} placeholder="Job Cost" value={cost} onChange={(e) => {
										setCost(e.target.value)
									}} />
								</Form.Group>
							</Col>
							<Col lg={6}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Time In Minutes</Form.Label>
									<Form.Control type="number" min={1} placeholder="Time In Minutes" value={time} onChange={(e) => {
										setTime(e.target.value)
									}} />
								</Form.Group>
							</Col>
						</Row>
						<div className="my-2">
							<Button variant="primary" type="submit">
								Create Job
							</Button>
							<Button variant="secondary" className="mx-2" onClick={handleClose}>
								Cancel
							</Button></div>
					</Form>
				</Modal.Body>
				<Modal.Footer>

				</Modal.Footer>
			</Modal>
		</>
	);
};

export default CreateModal;
