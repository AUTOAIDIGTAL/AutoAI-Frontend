"use client";
import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Col, Form, Row } from "react-bootstrap";
import Multiselect from "multiselect-react-dropdown";
import { apiService } from "@/services";
import { constants } from "../../../garage-management/constant";
import { message } from "antd";
import { useRouter } from "next/navigation";

const WorkRequiredModal = ({ workOrderId }) => {
	const [show, setShow] = useState(false);
	const [jobOptions, setJobOptions] = useState([]);
	const [jobName, setJobName] = useState("");
	const [jobCost, setJobCost] = useState("");
	const [time, setTime] = useState("");
	const [priority, setPriority] = useState("");
	const [comment, setComment] = useState("");
	const [jobId, setJobId] = useState("");
	const [parts, setParts] = useState([{ name: "", cost: "", comments: "" }]);
	const router = useRouter()

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const jobsRef = useRef(null);

	const handleAddPart = () => {
		setParts([...parts, { name: "", cost: "", comments: "" }]);
	};

	const handleRemovePart = (index) => {
		const updatedParts = parts.filter((_, i) => i !== index);
		setParts(updatedParts);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			message.loading("Creating work order...", 0);

			let filteredParts = parts.length ? parts.filter((part) => part.name && part.cost && part.comments) : [];

			const data = {
				service: {
					id: jobId,
					"description": jobName,
					"cost": jobCost,
					time,
					priority,
					comments: comment
				},
				parts: filteredParts
			};

			const response = await apiService.post(`${constants.workOrder}/${workOrderId}${constants.job}`, data)
			if (response) {
				message.destroy();
				message.success("Work order created successfully", 2.5);
				console.log(response)
				const job = response.jobs[response.jobs.length - 1]
				router.push(`/scheduled-tasks/${job._id}/${job.service.id}`)
			}
		} catch (error) {
			message.destroy();
			message.error(`Work order creation failed: ${error.message}`, 2.5);

			console.log(error);
		}
	};

	const handleJobSearch = async (val) => {
		try {
			if (val.length > 3) {
				const searchResult = await apiService.get(`${constants.searchJob}?search=${val}`);
				setJobOptions(searchResult);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleJobSelection = (job) => {
		if (job) {
			setJobId(job._id);
			setJobName(job.name);
			setJobCost(job.cost);
			setTime(job.time);
		} else {
			setJobName("");
			setJobCost("");
			setTime("");
		}
	};

	const handlePriorityChange = (e) => {
		const { name, checked } = e.target;
		setPriority(checked ? name : priority);
	};

	return (
		<>
			<Button variant="primary ms-auto me-0" onClick={handleShow}>
				Add New Job
			</Button>

			<Modal show={show} onHide={handleClose} size="xl" scrollable centered>
				<Modal.Header closeButton>
					<Modal.Title>Work Required</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Row>
							<Col xs="12" lg="3">
								<Form.Group className="mb-3" controlId="jobName">
									<Form.Label>Job Name</Form.Label>
									<div className="position-relative">
										<Multiselect
											isObject={true}
											options={jobOptions}
											displayValue="name"
											className="bg-gray-100 rounded-ai"
											placeholder="Search Jobs"
											selectionLimit={1}
											onSearch={handleJobSearch}
											ref={jobsRef}
											onSelect={(selected) => handleJobSelection(selected[0])}
											onRemove={() => handleJobSelection(null)}
										/>
										<span className="position-absolute top-50 end-15 translate-middle">
											<span className="icon-search"></span>
										</span>
									</div>
								</Form.Group>
							</Col>
							<Col xs="12" lg="3">
								<Form.Group className="mb-3" controlId="jobCost">
									<Form.Label>Job Cost</Form.Label>
									<Form.Control type="text" placeholder="Job Cost" value={jobCost} onChange={(e) => setJobCost(e.target.value)} />
								</Form.Group>
							</Col>
							<Col xs="12" lg="3">
								<Form.Group className="mb-3" controlId="time">
									<Form.Label>Time</Form.Label>
									<Form.Control type="text" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} />
								</Form.Group>
							</Col>
							<Col xs="12" lg="3">
								<Form.Group className="mb-3" controlId="priority">
									<Form.Label>Priority</Form.Label>
									<div className="bg-gray-100 gap-3 px-4 rounded-4 d-flex justify-content-between align-items-center text-muted" style={{ height: "45px" }}>
										{
											["HIGH", "MEDIUM", "LOW"].map((p, index) => (
												<Form.Group className="m-0" controlId="priorityHigh" key={index}>
													<Form.Check type="checkbox" checked={p === priority} name={`${p}`} label={`${p}`} onChange={handlePriorityChange} />
												</Form.Group>
											))
										}
									</div>
								</Form.Group>
							</Col>
							<Col xs="12">
								<Form.Group className="mb-3" controlId="comment">
									<Form.Label>Comment</Form.Label>
									<Form.Control type="text" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)} />
								</Form.Group>
							</Col>

							{parts.map((part, index) => (
								<Row key={index} className="align-items-end">
									<Col xs="12" lg="4">
										<Form.Group className="mb-3" controlId={`name-${index}`}>
											<Form.Label>Part Name</Form.Label>
											<Form.Control type="text" placeholder="Part Name" value={part.name} onChange={(e) => {
												const newParts = [...parts];
												newParts[index].name = e.target.value;
												setParts(newParts);
											}} />
										</Form.Group>
									</Col>
									<Col xs="12" lg="4">
										<Form.Group className="mb-3" controlId={`cost-${index}`}>
											<Form.Label>Cost</Form.Label>
											<Form.Control type="text" placeholder="Cost" value={part.cost} onChange={(e) => {
												const newParts = [...parts];
												newParts[index].cost = e.target.value;
												setParts(newParts);
											}} />
										</Form.Group>
									</Col>
									<Col xs="12" lg="4">
										<Form.Group className="mb-3" controlId={`comments-${index}`}>
											<Form.Label>Comment</Form.Label>
											<Form.Control type="text" placeholder="Comment" value={part.comments} onChange={(e) => {
												const newParts = [...parts];
												newParts[index].comments = e.target.value;
												setParts(newParts);
											}} />
										</Form.Group>
									</Col>
									<Col xs="12" lg="12" className="my-2">
										<Button variant="danger" size="sm" onClick={() => handleRemovePart(index)}>
											Remove Part
										</Button>
									</Col>
								</Row>
							))}
						</Row>
						<Button variant="soft-primary fs-6 d-inline-flex align-items-center" size="sm" onClick={handleAddPart}>
							<i className="icon-plus fs-5 me-1"></i> Add new Part
						</Button>

						<div className="d-flex justify-content-between mt-3 gap-2">
							<Button variant="outline-secondary fs-6" size="sm" onClick={handleClose}>
								Cancel
							</Button>
							<div className="d-flex justify-content-between gap-2">
								<Button variant="outline-primary fs-6" size="sm" onClick={handleClose}>
									Back
								</Button>
								<Button variant="primary fs-6" size="sm" type="submit">
									Next
								</Button>
							</div>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default WorkRequiredModal;
