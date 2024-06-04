"use client";

import { Nav } from "react-bootstrap";
import { WorkOrderContext } from "../workOrderContext";
import { useContext } from "react";

const Wizard = () => {

	const { formStage, setFormStage } = useContext(WorkOrderContext);

	console.log('FORM STAGE', formStage)
	return (
		<Nav className="wizard-form mb-4" defaultActiveKey={'1'} activeKey={formStage} onSelect={(v) => setFormStage(v)}>
			<Nav.Link eventKey={'1'}  >
				<div
					className="list-group-item list-group-item-action active"
					aria-current="true"
				>
					<div className="d-flex w-100 justify-content-between">
						<small className="mb-1">Step</small>
						<small>01</small>
					</div>
					<p className="mb-1">Vehicle and Customer Details</p>
				</div>
			</Nav.Link>
			<div className="vr py-3 my-auto mx-3 mx-xl-5" />
			<Nav.Link eventKey={'2'}>
				<div
					className="list-group-item list-group-item-action active"
					aria-current="true"
				>
					<div className="d-flex w-100 justify-content-between">
						<small className="mb-1">Step</small>
						<small>02</small>
					</div>
					<p className="mb-1">Work Required and Additional Work</p>
				</div>
			</Nav.Link>
			<div className="vr py-3 my-auto mx-3 mx-xl-5" />
			<Nav.Link eventKey={'3'}>
				<div
					className="list-group-item list-group-item-action active"
					aria-current="true"
				>
					<div className="d-flex w-100 justify-content-between">
						<small className="mb-1">Step</small>
						<small>03</small>
					</div>
					<p className="mb-1">Date and Time Selection</p>
				</div>
			</Nav.Link>
			<div className="vr py-3 my-auto mx-3 mx-xl-5" />
			<Nav.Link eventKey={'4'}>
				<div
					className="list-group-item list-group-item-action active"
					aria-current="true"
				>
					<div className="d-flex w-100 justify-content-between">
						<small className="mb-1">Step</small>
						<small>04</small>
					</div>
					<p className="mb-1">Work Order Confirmation</p>
				</div>
			</Nav.Link>
		</Nav>
	);
};

export default Wizard;
