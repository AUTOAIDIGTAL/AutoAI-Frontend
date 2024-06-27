"use client"
import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import WorkRequiredModal from "./work-required-modal/page";
import Comments from "@/components/UI/comments/comments";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";

export const WorkOrderModal = ({ show, handleClose, workOrderId }) => {

	const [workOrder, setWorkOrder] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		console.log('WORK ORDER ID', workOrderId);
		const workOrderDetails = async () => {
			if (workOrderId) {
				const response = await apiService.get(`${constants.workOrder}/${workOrderId}`)
				console.log('WORK ORDER DETAILS', response);
				setWorkOrder(response)
			}
		}
		workOrderDetails()
	}, [workOrderId, refetch])

	const refetchJobs = () => {
		setRefetch(!refetch)
	}
	return (
		<Offcanvas
			show={show}
			onHide={handleClose}
			backdrop="static"
			placement="end"
			className="custom-offcanvas"
		>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Job Details</Offcanvas.Title>
				<WorkRequiredModal workOrderId={workOrderId} />
			</Offcanvas.Header>
			<Offcanvas.Body>

				<div className="divider-list mb-4">
					<div className="divider-list-wrap bg-gray-100 p-3 rounded-ai-md border-0">
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-dark">Vehicle Number</div>
								<div className="fs-6 text-dark fw-semibold">{workOrder?.vehicle?.regPlate}</div>
							</div>
						</div>
						<div className="divider-list-wrap-auto">
							<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
						</div>
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-dark">Customer Name</div>
								<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
									{workOrder?.customer?.name}
								</div>
							</div>
						</div>
					</div>
				</div>
				{workOrder?.jobs.map((job, index) => (
					<>
						<hr className="mb-3" />
						<div className="divider-list mb-3">
							<div className="divider-list-wrap border-0">
								<div className="divider-list-wrap-flex">
									<div className="d-flex justify-content-between align-items-center">
										<div className="fs-6 text-dark">Job Name</div>
										<div className="fs-6 text-dark fw-semibold text-capitalize">{job?.service?.description}</div>
									</div>
								</div>
								<div className="divider-list-wrap-auto">
									<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
								</div>
								<div className="divider-list-wrap-flex">
									<div className="d-flex justify-content-between align-items-center">
										<div className="fs-6 text-dark text-truncate">Job Cost</div>
										<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
											{job?.service?.cost} £
										</div>
									</div>
								</div>
								<div className="divider-list-wrap-auto">
									<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
								</div>
								<div className="divider-list-wrap-flex">
									<div className="d-flex justify-content-between align-items-center">
										<div className="fs-6 text-dark">Time Consumed</div>
										<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
											{job?.service?.time} min
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-between align-items-center mb-4">
							<div className="fs-6 text-dark">Priority</div>
							<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
								{job?.service?.priority}
							</div>
						</div>
						<div className="bg-gray-100 p-3 rounded-ai-md border-0 mb-4">
							<div className="fs-5 fw-semibold mb-4">Parts Required</div>
							<div className="divider-list mb-3">
								{job?.parts.map((part, index) => (
									<div className="divider-list-wrap">
										<div className="divider-list-wrap-flex">
											<div className="d-flex justify-content-between align-items-center">
												<div className="fs-6 text-dark">Part Name</div>
												<div className="fs-6 text-dark fw-semibold text-capitalize">{part?.name}</div>
											</div>
										</div>
										<div className="divider-list-wrap-auto">
											<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
										</div>
										<div className="divider-list-wrap-flex">
											<div className="d-flex justify-content-between align-items-center">
												<div className="fs-6 text-dark">Part Cost</div>
												<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
													{part?.cost} £
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="fs-6 text-dark mb-4">Comments</div>
							<Comments job={job} refetchJob={refetchJobs} />
						</div>
						<div className="divider-list mb-3">
							<div className="divider-list-wrap border-0">
								<div className="divider-list-wrap-flex">
									<div className="d-flex justify-content-between align-items-center gap-3">
										<div className="fs-6 text-dark">Assigned Mechanic</div>
										<div className="fs-6 text-dark fw-semibold">
											{job?.mechanic?.firstName} {job?.mechanic?.lastName}
										</div>
										<div className="fs-6 text-dark">Status</div>
										<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
											{job?.status}
										</div>
									</div>
								</div>
								<div className="divider-list-wrap-auto">
									<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
								</div>
								<div className="divider-list-wrap-auto">
									<div className="d-flex justify-content-between align-items-center gap-3">
										<div className="fs-6 text-dark">Date & Time</div>
										<div className="fs-6 text-dark fw-semibold">
											{new Date(job?.end)?.toLocaleDateString() || ''} {new Date(job?.end)?.toLocaleTimeString() || ''}
										</div>
									</div>
								</div>
							</div>
						</div>
					</>

				))}

			</Offcanvas.Body>
		</Offcanvas>
	);
};
