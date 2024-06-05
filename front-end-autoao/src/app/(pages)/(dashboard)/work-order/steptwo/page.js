"use client";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useContext, useEffect, useRef, useState } from "react";
import { WorkOrderContext } from "../workOrderContext";
import Multiselect from "multiselect-react-dropdown";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";
import { message } from "antd";
import { useRouter } from "next/navigation";

const WorkOrderStep2 = () => {

	const { setFormStage, workOrder, setWorkOrder, formStage } = useContext(WorkOrderContext);
	const [jobOptions, setJobOptions] = useState([]);
	const [jobs, setJobs] = useState([{ _id: '', jobId: '', jobName: '', jobCost: '', time: '', priority: '', comments: '', parts: [{ name: '', cost: '', comments: '' }] }]);
	const jobsRef = useRef(null);
	const [selectedJob, setSelectedJob] = useState(null);
	const router = useRouter()

	const handleAddJob = () => {
		setJobs([...jobs, { _id: '', jobId: '', jobName: '', jobCost: '', time: '', priority: '', comments: '', parts: [{ name: '', cost: '', comments: '' }] }]);
	};

	const handleRemoveJob = (index) => {
		const values = [...jobs];
		if (index == 0) {
			values[index] = { _id: '', jobId: '', jobName: '', jobCost: '', time: '', priority: '', comments: '', parts: [{ name: '', cost: '', comments: '' }] };
			setJobs(values);
		} else {
			values.splice(index, 1);
			setJobs(values);
		}
	};

	const handleInputChange = (index, event) => {
		const values = [...jobs];
		values[index][event.target.name] = event.target.value;
		setJobs(values);
	};

	const handleJobSelection = async (job, index, add) => {
		if (add) {
			const values = [...jobs];
			values[index].jobId = job._id;
			values[index].jobName = job.name;
			values[index].jobCost = job.cost;
			values[index].time = job.time;
			setJobs(values);
			console.log('Selected job:', jobs)
		} else {
			console.log(job)
			const response = await apiService.delete(`${constants.workOrder}/${workOrder._id}/job/${job}`)
			const values = [...jobs];
			values[index] = { _id: '', jobId: '', jobName: '', jobCost: '', time: '', priority: '', comments: '', parts: [{ name: '', cost: '', comments: '' }] };
			setJobs(values);
		}
	}

	const handlePriorityChange = (index, priority) => {
		const values = [...jobs];
		values[index].priority = priority;
		setJobs(values);
	};

	const handleAddPart = (index) => {
		const values = [...jobs];
		values[index].parts.push({ name: '', cost: '', comments: '' });
		setJobs(values);
	};

	const handleRemovePart = (jobIndex, partIndex) => {
		const values = [...jobs];
		values[jobIndex].parts.splice(partIndex, 1);
		setJobs(values);
	};

	const handlePartChange = (jobIndex, partIndex, event) => {
		const values = [...jobs];
		values[jobIndex].parts[partIndex][event.target.name] = event.target.value;
		setJobs(values);
	};

	const handleJobSearch = async (val) => {
		try {
			if (val?.length > 3) {
				const searchResult = await apiService.get(`${constants.searchJob}?search=${val}`);
				setJobOptions(searchResult);
			}
		} catch (error) {
			console.log(error)
		}
	}


	const handleSubmit = async (event) => {
		event.preventDefault();
		jobs.map(async (job) => {
			const data = {
				service: {
					id: job.jobId,
					description: job.jobName,
					cost: job.jobCost,
					time: job.time,
					comments: job.comments,
					priority: job.priority
				},
				parts: job.parts.filter((part) => part.name),
				_id: job?._id
			}

			try {
				let response;
				if (!job._id) {
					response = await apiService.post(`${constants.workOrder}/${workOrder._id}/job`, data)
				} else if (job?._id) {
					console.log('PUT', data)
					response = await apiService.put(`${constants.workOrder}/${workOrder._id}/job/${job._id}`, data)
				}

				if (response) {
					setWorkOrder(response)
					setFormStage('3')
				}
			} catch (error) {
				message.error(`Error creating job ${job.jobName}`)
				console.log(error)
			}
		})
	};

	useEffect(() => {
		if (workOrder?.jobs?.length > 0) {
			const data = workOrder?.jobs?.map((job) => {
				return {
					_id: job?._id || undefined,
					jobId: job.service.id,
					jobName: job.service.name,
					jobCost: job.service.cost,
					time: job.service.time,
					priority: job.service.priority,
					comments: job.service.comments,
					parts: job.parts,
					job: {
						...job.service,
						name: job.service.description,
					}
				}
			})
			console.log('DATA', data)
			setJobs(data)
		}
	}, [workOrder]);

	return (
		<div className="min-screen-layout mt-3 py-4">
			<Form className="bg-white p-4 rounded-ai-md shadow-sm" onSubmit={handleSubmit}>
				<div className="fs-4 fw-semibold mb-3">Work Required</div>
				{jobs.map((job, index) => (
					<div key={index}>
						<Row>
							<Col xs="12" lg="3">
								<Form.Group className="mb-3" controlId={`jobName-${index}`}>
									<Form.Label>Job Name</Form.Label>
									<Multiselect
										isObject={true}
										options={jobOptions}
										displayValue="name"
										className="bg-gray-100 rounded-ai"
										placeholder="Search Jobs"
										selectionLimit={1}
										onSearch={handleJobSearch}
										ref={jobsRef}
										onSelect={(selected) => handleJobSelection(selected[0], index, true)}
										onRemove={(removed) => handleJobSelection(job._id, index, false)}
										selectedValues={job?.job ? [job?.job] : []}
									/>
								</Form.Group>
							</Col>
							<Col xs="12" lg="3">
								<Form.Group className="mb-3" controlId={`jobCost-${index}`}>
									<Form.Label>Job Cost</Form.Label>
									<Form.Control
										type="text"
										placeholder="Job Cost"
										name="jobCost"
										value={job.jobCost}
										onChange={(event) => handleInputChange(index, event)}
									/>
								</Form.Group>
							</Col>
							<Col xs="12" lg="3">
								<Form.Group className="mb-3" controlId={`time-${index}`}>
									<Form.Label>Time</Form.Label>
									<Form.Control
										type="text"
										placeholder="Time"
										name="time"
										value={job.time}
										onChange={(event) => handleInputChange(index, event)}
									/>
								</Form.Group>
							</Col>
							<Col xs="12" lg="3">
								<Form.Group className="mb-3" controlId={`priority-${index}`}>
									<Form.Label>Priority</Form.Label>
									<div className="bg-gray-100 gap-3 px-4 rounded-4 d-flex justify-content-between align-items-center text-muted" style={{ height: '45px' }}>
										{['HIGH', 'MEDIUM', 'LOW'].map((priority) => (
											<Form.Group className="m-0" controlId={`priority-${priority}-${index}`} key={priority}>
												<Form.Check
													type="checkbox"
													label={priority}
													checked={job.priority === priority}
													onChange={() => handlePriorityChange(index, priority)}
													className="text-capitalize"
													defaultChecked={"HIGH"}
												/>
											</Form.Group>
										))}
									</div>
								</Form.Group>
							</Col>
							<Col xs="12">
								<Form.Group className="mb-3" controlId={`comments-${index}`}>
									<Form.Label>Comment</Form.Label>
									<Form.Control
										type="text"
										placeholder="Comment"
										name="comments"
										value={job.comments}
										onChange={(event) => handleInputChange(index, event)}
									/>
								</Form.Group>
							</Col>
							{/* <Form.Group className="m-3 text-muted ms-0" controlId={`partsRequired-${index}`}>
								<Form.Check type="checkbox" label="Parts required" />
							</Form.Group> */}

							{job.parts.map((part, partIndex) => (
								<div key={partIndex} className="d-flex">
									<Col xs="12" lg="4">
										<Form.Group className="mb-3" controlId={`name-${index}-${partIndex}`}>
											<Form.Label>Part Name</Form.Label>
											<Form.Control
												type="text"
												placeholder="Part Name"
												name="name"
												value={part.name}
												onChange={(event) => handlePartChange(index, partIndex, event)}
											/>
										</Form.Group>
									</Col>
									<Col xs="12" lg="4">
										<Form.Group className="mb-3" controlId={`cost-${index}-${partIndex}`}>
											<Form.Label>Cost</Form.Label>
											<Form.Control
												type="text"
												placeholder="Cost"
												name="cost"
												value={part.cost}
												onChange={(event) => handlePartChange(index, partIndex, event)}
											/>
										</Form.Group>
									</Col>
									<Col xs="12" lg="3">
										<Form.Group className="mb-3" controlId={`partComment-${index}-${partIndex}`}>
											<Form.Label>Comment</Form.Label>
											<Form.Control
												type="text"
												placeholder="Comment"
												name="comments"
												value={part.comments}
												onChange={(event) => handlePartChange(index, partIndex, event)}
											/>
										</Form.Group>
									</Col>
									<Col lg={"auto"} className="d-flex justify-content-end m-auto p-2">
										<div className="my-auto py-2 px-3 text-white bg-danger rounded-circle">
											-
										</div>
									</Col>
								</div>
							))}
						</Row>
						<Button variant="soft-primary fs-6 d-inline-flex align-items-center" size="sm" onClick={() => handleAddPart(index)}>
							<i className="icon-plus fs-5 me-1"></i> Add new Part
						</Button>
						<Button variant="danger fs-6 d-inline-flex align-items-center mt-2 ms-3" size="sm" onClick={() => handleRemoveJob(index)}>
							<i className="icon-minus fs-5 me-1"></i> Remove Job
						</Button>
						<hr className="my-4" />
					</div>
				))}
				<Button variant="soft-primary fs-6 d-inline-flex align-items-center" size="sm" onClick={handleAddJob}>
					<i className="icon-plus fs-5 me-1"></i> Add new Job
				</Button>
				<div className="d-flex justify-content-between mt-3 gap-2">
					<Button variant="outline-secondary fs-6" size="sm" onClick={() => { router.push('/work-order') }}>
						Cancel
					</Button>
					<div className="d-flex justify-content-between gap-2">
						<Button variant="outline-primary fs-6" size="sm" onClick={() => setFormStage(parseInt(formStage) - 1)}>
							Back
						</Button>
						<Button variant="primary fs-6" size="sm" type="submit">
							Next
						</Button>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default WorkOrderStep2;
