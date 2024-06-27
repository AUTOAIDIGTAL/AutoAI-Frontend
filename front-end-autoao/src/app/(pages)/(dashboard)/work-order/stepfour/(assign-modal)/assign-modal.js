"use client"
import { useContext, useEffect, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { WorkOrderContext } from "../../workOrderContext";
import { apiService } from "@/services";
import { constants } from "../../../garage-management/constant";

function AssignGretchen({ mechanic, service, date, onMechanicAssigned }) {
	const [show, setShow] = useState(false);
	const [serviceDetails, setServiceDetails] = useState();
	const [jobStart, setJobStart] = useState(null);
	const [jobEnd, setJobEnd] = useState(null);
	const { workOrder, setWorkOrder, setFormStage } = useContext(WorkOrderContext);
	const [mechanicJobs, setMechanicJobs] = useState([]);
	const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		const getJob = async () => {
			if (workOrder) {
				const matchingJob = workOrder.jobs.find(job => job.service.id === service);
				setServiceDetails({ ...matchingJob.service, jobId: matchingJob._id });
			} else if (service) {
				const response = await apiService.get(`${constants.job}/${service}`)
				console.log('SERVICE', response.workorderId)
				setServiceDetails({ ...response.service, jobId: response._id, workOrderId: response.workorderId });
			}
		}
		getJob()
	}, [service, workOrder])

	useEffect(() => {
		const getMechanicSchedule = async () => {
			let newDate = new Date(date)
			newDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
			const response = await apiService.get(`${constants.job}/user/${mechanic.user._id}/?specifiedDate=${newDate}`) // ${constants.mechanicByService}/${service}/?day=${date}
			setMechanicJobs(response)
		}
		getMechanicSchedule()
	}, [date, mechanic, service])


	const handleSubmission = async (e) => {
		e.preventDefault();
		try {
			let [startHours, startMinutes] = jobStart.split(":").map(Number);
			let [endHours, endMinutes] = jobEnd.split(":").map(Number);

			console.log({ startHours, startMinutes, endHours, endMinutes });
			let startTime = new Date(date);
			startTime.setHours(startHours);
			startTime.setMinutes(startMinutes);

			let endTime = new Date(date);
			endTime.setHours(endHours);
			endTime.setMinutes(endMinutes);

			console.log({ start: startTime, end: endTime, mechanic: mechanic._id, id: serviceDetails.workOrderId });
			// workOrder ?  : 
			const response = await apiService.put(`${constants.workOrder}/${workOrder ? workOrder._id : serviceDetails.workOrderId}/job/${serviceDetails.jobId}`, { start: startTime, end: endTime, mechanic: mechanic?.user?._id });

			if (response) {
				if (workOrder) setWorkOrder(response)
				onMechanicAssigned()
			}
		} catch (error) {
			console.error("Assign mechanic error:", error);
		}
	}
	return (
		<>
			<div class="bg-gray-100 py-2 px-3 rounded-5 text-primary fs-6 d-inline-block fw-semibold mt-3" role='button' onClick={handleShow}>
				Assign Mechanic
			</div>
			<Modal size="md" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>Assign to {mechanic?.user?.firstName}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={(e) => handleSubmission(e)}>
						<div className="bg-gray-100 p-4 rounded-ai-md mb-4">
							<div class="fs-6 fw-semibold mb-3">Job Details</div>
							<Row className="mb-3">
								<Col>
									<div class="small text-dark col-8">Job Name</div>
								</Col>
								<Col className="col-4">
									<div class="small text-dark text-center px-4">Time</div>
								</Col>
							</Row>

							<Row className="border-bottom pb-2 mb-2">
								<Col>
									<div class="small text-dark col-8 text-capitalize">{serviceDetails?.description}</div>
								</Col>
								<Col className="col-4">
									<div class="small text-primary text-center px-4">{serviceDetails?.time} Min</div>
								</Col>
							</Row>
						</div>

						<Row className="mb-3">
							<Col sm={6}>
								<Form.Group
									className="mb-3"
									controlId="exampleForm.ControlInput1"
								>
									<Form.Label>Job Start Time</Form.Label>
									<Form.Control type="time" placeholder="Job Start Time" value={jobStart} onChange={(e) => { setJobStart(e.target.value) }} />
								</Form.Group>
							</Col>
							<Col sm={6}>
								<Form.Group controlId="exampleForm.ControlInput1">
									<Form.Label>Job End Time</Form.Label>
									<Form.Control type="time" placeholder="Job End Time" value={jobEnd} onChange={(e) => { setJobEnd(e.target.value) }} />
								</Form.Group>
							</Col>
						</Row>

						<div className="bg-gray-100 p-4 rounded-ai-md">
							<div class="fs-6 fw-semibold mb-3">Jobs Assigned</div>
							<Row className="mb-3">
								<Col>
									<div class="small text-dark col-8">Job Name</div>
								</Col>
								<Col className="col-4">
									<div class="small text-dark text-center px-4">
										Job Duration
									</div>
								</Col>
							</Row>
							{mechanicJobs.map((_, index) => (
								<Row key={index} className="border-bottom pb-2 mb-2">
									<Col>
										<div class="small text-dark col-8">{_.service.description}</div>
									</Col>
									<Col className="col-4">
										<div class="small text-primary text-center px-1">
											{new Date(_.start).toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit" })} - {new Date(_.end).toLocaleTimeString("en", { hour: "2-digit", minute: "2-digit" })}
										</div>
									</Col>
								</Row>
							))}
						</div>
						<div className="d-flex gap-2">
							<Button variant="primary" type="submit" onClick={handleClose}>
								Create Job
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
}

export default AssignGretchen;
