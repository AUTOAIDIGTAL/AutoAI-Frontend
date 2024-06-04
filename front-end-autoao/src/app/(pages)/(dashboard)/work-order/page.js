"use client";

import { Button } from "react-bootstrap";
import WorkOrderDetails from "./work-order-details/page";
import { useEffect, useState } from "react";
import { apiService } from "@/services";
import { constants } from "../garage-management/constant";

const WorkOrder = () => {

	const [workOrder, setWorkOrder] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		const fetchWorkOrder = async () => {
			try {
				const response = await apiService.get(constants.workOrder);
				if (response) {
					setWorkOrder(response);
				}
			} catch (error) {
				console.log(error);
			}
		};
		fetchWorkOrder();
	}, [refetch])

	const handleRefetch = () => {
		setRefetch(!refetch);
	}

	return (
		<>
			<div className="min-screen-layout mt-3 py-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Work Order Details</div>
					<Button variant="primary" href="/work-order/create" className="fw-medium d-inline-flex align-items-center"><i className="icon-plus fs-5 me-1"></i> Create New work</Button>
				</div>
				<div className="flex-1 pt-3">
					{workOrder && workOrder.map((order, index) => (
						<WorkOrderDetails key={index} orderDetails={order} handleRefetch={handleRefetch} />
					))}
				</div>
			</div>
		</>
	);
};

export default WorkOrder;
