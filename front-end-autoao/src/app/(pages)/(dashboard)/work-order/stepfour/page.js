"use client";
import { Button, Col, Form, Row } from "react-bootstrap";
import Wizard from "../wizard/page";
import WorkOrderCreation from "./work-order-creation/page";
import { useContext } from "react";
import { WorkOrderContext } from "../workOrderContext";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";
import { useRouter } from "next/navigation";
import { message } from "antd";

const StepFour = () => {

	const { workOrder, setFormStage, formStage } = useContext(WorkOrderContext);
	const router = useRouter()
	const confirmOrder = async () => {
		message.open({
			type: 'loading',
			content: 'Logging in...',
			duration: 0,
		});

		try {
			if (workOrder._id) {
				const response = await apiService.put(`${constants.workOrder}/${workOrder._id}`, { status: "TODO" })

				if (response) {
					message.destroy();
					router.push('/work-order')
					message.success('Work order created successfully.', 2.5);
				}
			} else {
				message.destroy()
				message.warning('No Work order found.')

			}
		} catch (error) {
			message.destroy()
			message.error(`Work order creation failed: ${error.message}`, 2.5)

			console.log(error)
		}
	}

	return (
		<>
			<div className="min-screen-layout mt-3 py-4">
				<div className="bg-white p-4 rounded-ai-md shadow-sm">
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
					{workOrder?.jobs?.map((job) => (
						<WorkOrderCreation job={job} />
					))}
					<hr />
					<div className="d-flex justify-content-between mt-3">
						<Button variant="danger-link fs-6" size="sm" onClick={() => { router.push('/work-order') }}>
							Cancel
						</Button>
						<div className="d-flex gap-2">
							<Button variant="outline-primary fs-6" size="sm" onClick={() => {
								setFormStage('3')
							}}>
								Back
							</Button>
							<Button variant="primary fs-6" size="sm" onClick={confirmOrder}>
								Confirm Order
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StepFour;
