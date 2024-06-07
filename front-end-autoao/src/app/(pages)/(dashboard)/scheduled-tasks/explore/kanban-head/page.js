"use client"
import React from "react";
import WorkOrderModal from "../work-required-modal/page";
import DropdownWithForm from "../work-filter-modal-form/page";

const KanbanHead = () => {
	return (
		<div>
			<div className="d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center gap-3">
					<div className="fs-5 fw-medium">Tasks View</div>
				</div>
				<div className="d-flex align-items-center gap-3">
					<DropdownWithForm />
					<WorkOrderModal />
				</div>
			</div>
			<div className="flex-1 pt-3">{/* <PaginationUi /> */}</div>
		</div>
	);
};

export default KanbanHead;
