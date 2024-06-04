"use client";

import { apiService } from "@/services";
import { message } from "antd";
import { Button, Col, Row } from "react-bootstrap";
import { constants } from "../../garage-management/constant";
import { useRouter } from "next/navigation";

const WorkOrderDetails = ({ orderDetails, handleRefetch }) => {

	const router = useRouter();

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
			}
		} catch (error) {
			message.destroy();
			console.log(error);
			message.error("Failed to delete work order");
		}
	}


	const PriorityBadge = ({ priority }) => {
		const getBadgeClass = (priority) => {
			switch (priority) {
				case 'HIGH':
					return 'bg-soft-danger-secondary';
				case 'MEDIUM':
					return 'bg-warning ';
				case 'LOW':
					return 'bg-info';
				default:
					return 'bg-secondary-light';
			}
		};

		return (
			<div className={`fs-6 border py-1 px-2 rounded-2 d-inline-flex ${getBadgeClass(priority)}`}>
				{priority}
			</div>
		);
	};

	const handleEdit = async () => {
		router.push(`/work-order/create?workOrderId=${orderDetails._id}`)
	}


	return (
		<div className="bg-white p-3 rounded-ai-md mb-3">
			<div className="divider-list">
				<div className="divider-list-wrap bg-gray-100 p-3 rounded-ai-md border-0">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Vehicle Number
							</div>
							<div className="fs-6 text-dark fw-semibold">{orderDetails?.vehicle?.regPlate}</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Customer Name</div>
							<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
								{orderDetails?.customer?.name}							</div>
						</div>
					</div>
				</div>
			</div>
			{orderDetails?.jobs?.map((_, index) => (
				<div className="list-line-loop" key={index}>
					<Row className="d-flex justify-content-between align-items-center gy-3">
						<Col className="col-12 col-md-6 col-xl">
							<div className="small text-dark">Job Name</div>
							<div className="fs-6 text-muted">{_?.service?.description}</div>
						</Col>
						<Col className="col-12 col-md-6 col-xl">
							<div className="small text-dark">Job Cost</div>
							<div className="fs-6 text-primary">$ {_?.service?.cost}</div>
						</Col>
						<Col className="col-12 col-md-6 col-xl">
							<div className="small text-dark">Time</div>
							<div className="fs-6 text-muted">{_?.service?.time} mins</div>
						</Col>
						<Col className="col-12 col-md-6 col-xl">
							<div className="small text-dark">Priority</div>
							<PriorityBadge priority={_?.service?.priority} />


						</Col>
						<Col className="col-12 col-md-6 col-xl-auto">
							<div className="fs-6 text-dark">Parts Required</div>
							<div className="fs-6 text-muted">{_?.parts.length}</div>
						</Col>
					</Row>
				</div>
			))}
			<div className="d-flex justify-content-between mt-3">
				<Button variant="danger-link fs-6" size="sm" onClick={deleteWorkOrder}>Delete</Button>
				<div className="d-flex gap-2">
					<Button variant="outline-secondary fs-6" size="sm" onClick={handleEdit} >Edit Details</Button>
					<Button variant="soft-primary fs-6" size="sm">View Details</Button>
				</div>
			</div>
		</div>
	);
};

export default WorkOrderDetails;
