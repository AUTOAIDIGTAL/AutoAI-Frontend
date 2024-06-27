import React, { useContext } from "react";
import KanbanCard from "../KanbanCard";
import { ScheduledTaskContext } from "../../scheduleTasksContext";

const KanbanGridView = () => {

	const { workOrders } = useContext(ScheduledTaskContext);

	const renderCards = (status) => {
		console.log(workOrders);
		if (!workOrders) return null;
		else {
			const filteredWorkOrders = workOrders.filter(workOrder => workOrder.status === status);
			return filteredWorkOrders.map((workOrder) => (
				<KanbanCard key={workOrder._id} workOrder={workOrder} />
			));
		}
	};

	return (
		<>
			<div className="kanban-box-container d-flex flex-column gap-3">
				<div className="fs-5 fw-semibold mb-1">Draft</div>
				{renderCards('DRAFT')}
			</div>
			<div className="kanban-box-container d-flex flex-column gap-3">
				<div className="fs-5 fw-semibold mb-1">Booked</div>
				{renderCards('TODO')}
			</div>
			<div className="kanban-box-container d-flex flex-column gap-3">
				<div className="fs-5 fw-semibold mb-1">On Hold</div>
				{renderCards('ONHOLD')}
			</div>
			<div className="kanban-box-container d-flex flex-column gap-3">
				<div className="fs-5 fw-semibold mb-1">In Workshop</div>
				{renderCards('INPROGRESS')}
			</div>
			<div className="kanban-box-container d-flex flex-column gap-3">
				<div className="fs-5 fw-semibold mb-1">Awaiting Collection</div>
				{renderCards('COMPLETE')}
			</div>
			<div className="kanban-box-container d-flex flex-column gap-3">
				<div className="fs-5 fw-semibold mb-1">Collected</div>
				{
					renderCards('DRAFT') // TO BE DECIDED
				}
			</div>
		</>
	);
};

export default KanbanGridView;
