"use client";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, Dropdown } from "react-bootstrap";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";

const EditModal = ({ jobId, onJobEdited }) => {
	const [show, setShow] = useState(false);
	const [jobData, setJobData] = useState({
		name: "",
		description: "",
		time: "",
		cost: "",
	});
	const [loading, setLoading] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => {
		setShow(true)
	};

	// Fetch job data when the modal is shown
	useEffect(() => {
		if (show && jobId) {
			setLoading(true);
			apiService.get(`${constants.jobs}/${jobId}`)
				.then(response => {
					setJobData({
						name: response.name,
						description: response.description,
						time: response.time,
						cost: response.cost,
					});
					setLoading(false);
				})
				.catch(error => {
					console.error("Failed to fetch job data:", error);
					setLoading(false);
				});
		}
	}, [show, jobId]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setJobData({
			...jobData,
			[name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await apiService.put(`${constants.jobs}/${jobId}`, jobData);
			onJobEdited(response);
			setShow(false);
		} catch (error) {
			console.error("Failed to update job:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<span variant="" onClick={handleShow}>
				<Dropdown.Item>Edit</Dropdown.Item>
			</span>

			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Edit Job</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{loading ? (
						<p>Loading...</p>
					) : (
						<Form onSubmit={handleSubmit}>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Job Name</Form.Label>
								<Form.Control
									type="text"
									name="name"
									placeholder="Job Name"
									value={jobData.name}
									onChange={handleInputChange}
								/>
							</Form.Group>
							<Form.Group
								className="mb-3"
								controlId="exampleForm.ControlTextarea1"
							>
								<Form.Label>Description</Form.Label>
								<Form.Control
									as="textarea"
									className="p-2"
									rows={6}
									name="description"
									value={jobData.description}
									onChange={handleInputChange}
								/>
							</Form.Group>
							<Row>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicName">
										<Form.Label>Job Cost</Form.Label>
										<Form.Control
											type="number"
											min={1}
											name="cost"
											placeholder="Job Cost"
											value={jobData.cost}
											onChange={handleInputChange}
										/>
									</Form.Group>
								</Col>
								<Col lg={6}>
									<Form.Group className="mb-3" controlId="formBasicEmail">
										<Form.Label>Time In Minutes</Form.Label>
										<Form.Control
											type="number"
											min={1}
											name="time"
											placeholder="Time In Minutes"
											value={jobData.time}
											onChange={handleInputChange}
										/>
									</Form.Group>
								</Col>
							</Row>
							<div className="my-2">
								<Button variant="primary" type="submit">
									Save Changes
								</Button>
								<Button variant="secondary" className="mx-2" onClick={handleClose}>
									Cancel
								</Button>
							</div>
						</Form>
					)}
				</Modal.Body>
			</Modal>
		</>
	);
};

export default EditModal;
