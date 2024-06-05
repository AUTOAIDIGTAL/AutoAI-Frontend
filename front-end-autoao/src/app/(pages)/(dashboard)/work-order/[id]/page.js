"use client";
import { Button, Col, Form, Row } from "react-bootstrap";
import Wizard from "../wizard/page";
import WorkOrderCreation from "../stepfour/work-order-creation/page";
import { useContext, useEffect, useState } from "react";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";
import { useParams, useRouter } from "next/navigation";
import { message } from "antd";

const WorkOrderDetailScreen = () => {

	const router = useRouter()
	const params = useParams();
	const [workOrder, setWorkOrder] = useState(null);

	console.log('PARAMS', params.id)

	useEffect(() => {
		const getWorkOrder = async () => {
			try {
				if (params.id) {
					const response = await apiService.get(`${constants.workOrder}/${params.id}`)
					setWorkOrder(response)
				}
			} catch (error) {
				console.log('ERROR', error)
			}
		}
		getWorkOrder()
	}, [])

	const deleteWorkOrder = async () => {
		try {
			message.open({
				type: 'loading',
				content: 'Deleting Work order...',
				duration: 0,
			});

			const response = await apiService.delete(`${constants.workOrder}/${orderDetails._id}`);
			if (response) {
				message.destroy();
				handleRefetch()
				message.success("Work order deleted successfully");
				router.push('/work-order')
			}
		} catch (error) {
			message.destroy();
			console.log(error);
			message.error("Failed to delete work order");
		}
	}

	const handleEdit = async () => {
		router.push(`/work-order/create?workOrderId=${workOrder._id}`)
	}
	return (
		<>
			<div className="min-screen-layout mt-3 py-4">
				{workOrder && <div className="bg-white p-4 rounded-ai-md shadow-sm">
					<div class="fs-4 fw-semibold mb-3">Review Work Order Details</div>
					<div className="bg-gray-100 p-3 rounded-ai-md">
						<div className="divider-list-wrap flex-wrap border-0">
							<div className="divider-list-wrap-flex">
								<div className="d-flex justify-content-between align-items-center">
									<div className="fs-6 text-muted">Vehicle Number</div>
									<div className="fs-6 text-dark fw-semibold">{workOrder?.vehicle?.regPlate}</div>
								</div>
							</div>
							<div className="divider-list-wrap-auto">
								<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
							</div>
							<div className="divider-list-wrap-flex">
								<div className="d-flex justify-content-between align-items-center">
									<div className="fs-6 text-muted">Customer Name</div>
									<div className="fs-6 text-dark fw-semibold">{workOrder?.customer?.name}</div>
								</div>
							</div>
						</div>
					</div>
					{workOrder?.jobs?.map((job, index) => (
						<WorkOrderCreation job={job} key={index} />
					))}
					<div className="d-flex justify-content-between mt-3">
						<Button variant="danger-link fs-6" size="sm" onClick={deleteWorkOrder}>Delete</Button>
						<div className="d-flex gap-2">
							<Button variant="outline-secondary fs-6" size="sm" onClick={handleEdit} >Edit Details</Button>
						</div>
					</div>
				</div>
				}
			</div>
		</>
	);
};

export default WorkOrderDetailScreen;
