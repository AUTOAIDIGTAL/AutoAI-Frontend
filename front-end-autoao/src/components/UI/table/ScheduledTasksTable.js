import React, { useState } from "react";
import { Offcanvas, Table } from "react-bootstrap";
import MultipleAvatars from "@/components/avatar/multiple-avatars";
import WorkRequiredModal from "@/app/(pages)/(dashboard)/scheduled-tasks/explore/work-required-modal/page";
import Comments from "../comments/comments";

const ParentComponent = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<TableST handleShow={handleShow} />
			<WorkOrderModal show={show} handleClose={handleClose} />
		</>
	);
};

const TableST = ({ handleShow }) => {
	return (
		<Table hover responsive>
			<thead>
				<tr>
					<th className="text-muted">Registration Plate</th>
					<th className="text-muted">Customer Name</th>
					<th className="text-muted">Deadline</th>
					<th className="text-muted">Jobs</th>
					<th className="text-muted">Assigned Mechanics</th>
					<th className="text-muted">Status</th>
				</tr>
			</thead>
			<tbody>
				{Array.from({ length: 8 }).map((_, index) => (
					<tr key={index} onClick={handleShow}>
						<td>
							<div className="text-dark">T-001</div>
						</td>
						<td>
							<div className="text-muted">T-Jazmin</div>
						</td>
						<td>
							<div className="text-muted">09:00 PM | 24-12-2024</div>
						</td>
						<td>
							<div className="fs-6 fw-medium d-inline-flex align-items-center gap-1 rounded-5 bg-gray-100 py-1 px-2">
								<div className="text-primary">12</div>
								<div className="text-primary">/</div>
								<div className="text-muted">18</div>
							</div>
						</td>
						<td>
							<MultipleAvatars />
						</td>
						<td className="align-middle">
							<div className="d-flex align-items-center gap-2 h-100">
								<div className="fs-6 fw-normal rounded badge bg-light">
									In workshop
								</div>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

const WorkOrderModal = ({ show, handleClose }) => {
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
				<WorkRequiredModal />
			</Offcanvas.Header>
			<Offcanvas.Body>
				<div className="divider-list mb-4">
					<div className="divider-list-wrap bg-gray-100 p-3 rounded-ai-md border-0">
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-dark">Vehicle Number</div>
								<div className="fs-6 text-dark fw-semibold">Details Here</div>
							</div>
						</div>
						<div className="divider-list-wrap-auto">
							<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
						</div>
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-dark">Customer Name</div>
								<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
									Customer Name
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="divider-list mb-3">
					<div className="divider-list-wrap border-0">
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-dark">Job Name</div>
								<div className="fs-6 text-dark fw-semibold">Job Name</div>
							</div>
						</div>
						<div className="divider-list-wrap-auto">
							<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
						</div>
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-dark text-truncate">Job Cost</div>
								<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
									Job Cost
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
									65 minutes
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center mb-4">
					<div className="fs-6 text-dark">Priority</div>
					<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
						High
					</div>
				</div>
				<div className="bg-gray-100 p-3 rounded-ai-md border-0 mb-4">
					<div className="fs-5 fw-semibold mb-4">Parts Required</div>
					<div className="divider-list mb-3">
						<div className="divider-list-wrap">
							<div className="divider-list-wrap-flex">
								<div className="d-flex justify-content-between align-items-center">
									<div className="fs-6 text-dark">Vehicle Number</div>
									<div className="fs-6 text-dark fw-semibold">Details Here</div>
								</div>
							</div>
							<div className="divider-list-wrap-auto">
								<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
							</div>
							<div className="divider-list-wrap-flex">
								<div className="d-flex justify-content-between align-items-center">
									<div className="fs-6 text-dark">Customer Name</div>
									<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
										Customer Name
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="fs-6 text-dark mb-4">Comments</div>
					<Comments />
				</div>
				<div className="divider-list mb-3">
					<div className="divider-list-wrap border-0">
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center gap-3">
								<div className="fs-6 text-dark">Assigned Mechanic</div>
								<div className="fs-6 text-dark fw-semibold">
									Miss Sadie Kerluke
								</div>
								<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
									In Progress
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
									11-04-2024 - 10:00PM
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="divider-list mb-3">
					<div className="divider-list-wrap border-0">
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-dark">Job Name</div>
								<div className="fs-6 text-dark fw-semibold">Job Name</div>
							</div>
						</div>
						<div className="divider-list-wrap-auto">
							<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
						</div>
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-dark text-truncate">Job Cost</div>
								<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
									Job Cost
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
									65 minutes
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center mb-4">
					<div className="fs-6 text-dark">Priority</div>
					<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
						High
					</div>
				</div>
			</Offcanvas.Body>
		</Offcanvas>
	);
};
export default ParentComponent;
