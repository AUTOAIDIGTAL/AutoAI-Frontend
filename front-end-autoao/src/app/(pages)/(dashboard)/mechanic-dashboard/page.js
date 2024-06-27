"use client";
import MechanicsJobsCompleted from "@/components/UI/cards/mechanics-jobs-completed/page";
import OngoingTasks from "@/components/UI/cards/ongoing-tasks/page";
import MechanicDashboardlTable from "@/components/UI/table/MechanicDashboardlTable";
import ApplyFilterModalForm from "./(apply-filter-modal-form)/modal";
import { Col, Container, Row } from "react-bootstrap";

const MechanicDashboard = () => {
	return (
		<>
			<div className="min-screen-layout mt-3 pt-3">
				<Container fluid>
					<Row className="g-4">
						<Col className="col-12">
							<div className="bg-white p-4 rounded-ai-md border-0 shadow-shadow-2xl w-100 card">
								<div className="d-flex justify-content-between align-items-center">
									<div className="fs-5 text-dark fw-semibold">All Task</div>
									<ApplyFilterModalForm />
								</div>
								<MechanicDashboardlTable />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default MechanicDashboard;
