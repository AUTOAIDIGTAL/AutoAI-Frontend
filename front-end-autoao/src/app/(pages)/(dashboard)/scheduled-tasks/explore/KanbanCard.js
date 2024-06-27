import React, { useEffect, useState } from "react";
import { WorkOrderModal } from "./WorkOrderModal";
import { KanbanCard } from "./KanbanCard.1";

const ParentComponent = ({ workOrder }) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		const workOrderDetails = () => {
			if (workOrder) {
				workOrder.jobs.map((job) => {
					console.log('JOB HERE', job);
					return;
				})
			}
		}
		workOrderDetails()
	}, [])

	return (
		<>
			<KanbanCard handleShow={handleShow} workOrder={workOrder} />
			<WorkOrderModal show={show} handleClose={handleClose} workOrderId={workOrder._id} />
		</>
	);
};

export default ParentComponent;
