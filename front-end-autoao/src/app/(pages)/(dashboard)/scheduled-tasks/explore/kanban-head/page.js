"use client"
import React from "react";
import WorkOrderModal from "../work-required-modal/page";
import DropdownWithForm from "../work-filter-modal-form/page";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

const KanbanHead = () => {
	const router = useRouter();
	return (
		<div>
			<div className="d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center gap-3">
					<div className="fs-5 fw-medium">Tasks View</div>
				</div>
				<div className="d-flex align-items-center gap-3">
					<DropdownWithForm />
					{/* <WorkOrderModal /> */}

					<Button variant="primary ms-auto me-0" onClick={() => router.push('/work-order/create')}  >
						Add New Work Order
					</Button>
				</div>
			</div>
		</div>
	);
};

export default KanbanHead;
