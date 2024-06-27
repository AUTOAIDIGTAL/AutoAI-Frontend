import React from "react";
import { Card } from "react-bootstrap";
import MultipleAvatars from "@/components/avatar/multiple-avatars";

export const KanbanCard = ({ handleShow, workOrder }) => {
	return (
		<Card className="border-0 rounded-ai-md task-card" onClick={handleShow} role="button">
			<Card.Body className="d-flex flex-column gap-2">
				<div className="d-flex justify-content-between align-items-center lh-1 pb-1">
					<div className="fs-6 fw-semibold text-truncate pe-3">{workOrder?.vehicle?.regPlate}</div>
					<div className="small fw-medium d-flex align-items-center gap-2 rounded-5 bg-gray-100 py-1 px-2">
						<div className="text-dark">ID</div>
						<div className="text-muted">{workOrder?._id?.substr(20, 4)}</div>
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center border-bottom lh-1 pb-2">
					<div className="small text-truncate pe-3">Customer Name</div>
					<div className="fs-6 text-muted">{workOrder?.customer?.name}</div>
				</div>
				<div className="d-flex justify-content-between align-items-center border-bottom lh-1 pb-2">
					<MultipleAvatars mechanics={workOrder?.mechanics} />
					<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-primary d-inline-flex">
						{new Date(workOrder.createdAt).toLocaleTimeString()} - {new Date(workOrder.createdAt).toLocaleDateString()}
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center border-bottom lh-1 pb-2">
					<div className="small text-truncate pe-3">Parts Required</div>
					<div className="fs-6 text-dark rounded-5 bg-gray-100 py-1 px-2">
						{workOrder?.partsRequired ? 'Yes' : 'No'}
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center lh-1">
					<div className="small text-truncate pe-3">Total Job</div>
					<div className="fs-6 fw-medium d-flex align-items-center gap-1 rounded-5 bg-gray-100 py-1 px-2">
						<div className="text-primary">{workOrder?.inprogressCount}</div>
						<div className="text-primary">/</div>
						<div className="text-muted">{workOrder?.totalJobs}</div>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};
