"use client";
import MechanicsJobsCompleted from "@/components/UI/cards/mechanics-jobs-completed/page";
import OngoingTasks from "@/components/UI/cards/ongoing-tasks/page";
import GlobalTable from "@/components/UI/table/GlobalTable";
import FilterModalForm from "./(filter-modal-form)/page";
import { Col, Container, Row } from "react-bootstrap";
import JobsStatus from "@/components/UI/cards/jobs-status/page";

const Admin = () => {
	return (
		<>
			<div className="min-screen-layout mt-3 pt-3">
				<Container fluid>
					<Row className="g-4">
						<Col xxl={8}>
							<Row className="g-4">
								<Col xl={6}>
									<OngoingTasks />
								</Col>
								<Col xl={6}>
									<OngoingTasks />
								</Col>
								<Col xl={6}>
									<OngoingTasks />
								</Col>
								<Col xl={6}>
									<OngoingTasks />
								</Col>
							</Row>
						</Col>
						<Col xxl={4} className="d-flex">
							<MechanicsJobsCompleted />
						</Col>

						<Col xl={12} className="d-flex">
							<JobsStatus />
						</Col>

						<Col className="col-12">
							<div className="bg-white p-4 rounded-ai-md border-0 shadow-shadow-2xl w-100 card">
								<div className="d-flex justify-content-between align-items-center">
									<div className="fs-5 text-dark fw-semibold">Ongoing Tasks</div>
									<FilterModalForm />
								</div>
								<GlobalTable />
							</div>
						</Col>
						<Col className="col-12">
							<div className="bg-white p-4 rounded-ai-md border-0 shadow-shadow-2xl w-100 card">
								<div className="d-flex justify-content-between align-items-center">
									<div className="fs-5 text-dark fw-semibold">Tasks Due Completed</div>
									<FilterModalForm />
								</div>
								<GlobalTable />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Admin;
