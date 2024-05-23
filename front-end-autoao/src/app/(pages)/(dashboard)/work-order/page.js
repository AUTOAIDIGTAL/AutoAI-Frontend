"use client";

import { Button } from "react-bootstrap";
import WorkOrderDetails from "./work-order-details/page";

const WorkOrder = () => {
	return (
		<>
			<div className="min-screen-layout mt-3 py-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Work Order Details</div>
					<Button variant="primary" className="fw-medium d-inline-flex align-items-center"><i className="icon-plus fs-5 me-1"></i> Create New work</Button>
				</div>
				<div className="flex-1 pt-3">
					<WorkOrderDetails/>
					<WorkOrderDetails/>
				</div>
			</div>
		</>
	);
};

export default WorkOrder;
