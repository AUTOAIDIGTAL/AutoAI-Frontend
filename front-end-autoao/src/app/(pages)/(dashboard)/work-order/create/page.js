"use client";
import { Button, Col, Form, Row } from "react-bootstrap";
import Wizard from "../wizard/page";
import { useContext, useEffect } from "react";
import WorkOrderStep1 from "../step1/step1";
import WorkOrderStep2 from "../steptwo/page";
import WorkOrderStep3 from "../stepthree/page";
import { WorkOrderContext, WorkOrderProvider } from "../workOrderContext";
import WorkOrderStep4 from "../stepfour/page";
import { useParams, useSearchParams } from "next/navigation";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";

const WorkOrderCreation = () => {
	const { formStage, setWorkOrder, setFormStage } = useContext(WorkOrderContext);

	const params = useSearchParams();

	useEffect(() => {
		const getWorkOrder = async () => {
			if (params.get("workOrderId")) {
				const response = await apiService.get(`${constants.workOrder}/${params.get("workOrderId")}`)
				setWorkOrder(response)
				setFormStage(response.stage.toString())
			}
		}
		getWorkOrder()
	}, [])

	const handleComponent = () => {
		switch (formStage) {
			case '1':
				return <WorkOrderStep1 />;
			case '2':
				return <WorkOrderStep2 />;
			case '3':
				return <WorkOrderStep3 />;
			case '4':
				return <WorkOrderStep4 />
			default:
				return <WorkOrderStep1 />;
		}
	};

	return (
		<div className="min-screen-layout mt-3 py-4">
			<div className="flex-1 pt-3">
				<Wizard />
				{handleComponent()}
			</div>
		</div>
	);
};

const WorkOrderCreationWithProvider = () => (
	<WorkOrderProvider>
		<WorkOrderCreation />
	</WorkOrderProvider>
);

export default WorkOrderCreationWithProvider;
