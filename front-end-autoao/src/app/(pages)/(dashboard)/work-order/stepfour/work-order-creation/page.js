"use client";
import { apiService } from "@/services";
import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { constants } from "../../../garage-management/constant";

const WorkOrderStep4 = ({ job }) => {

	return (
		<>
			<div>
				<div class="fs-5 fw-semibold mb-3 pt-4">Brake Change</div>

				<Row className="border-layout pt-3">
					<Col
						xs={12}
						md={6}
						xxl={3}
						className="mb-3 d-flex justify-content-between"
					>
						<div className="fs-6 text-dark">Job Name</div>
						<div className="fs-6 text-dark fw-semibold">{job?.service?.description}</div>
					</Col>
					<Col
						xs={12}
						md={6}
						xxl={3}
						className="mb-3 d-flex justify-content-between"
					>
						<div className="fs-6 text-dark">Job Cost</div>
						<div className="fs-6 text-dark fw-semibold">{job?.service?.cost}</div>
					</Col>
					<Col
						xs={12}
						md={6}
						xxl={3}
						className="mb-3 d-flex justify-content-between"
					>
						<div className="fs-6 text-dark">TIme</div>
						<div className="fs-6 text-dark fw-semibold">{job?.service?.time}</div>
					</Col>
					<Col
						xs={12}
						md={6}
						xxl={3}
						className="mb-3 d-flex justify-content-between"
					>
						<div className="fs-6 text-dark">Priority</div>
						<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
							{job?.service?.priority}
						</div>
					</Col>
				</Row>

				<div className="bg-gray-100 p-3 rounded-ai-md">
					<div class="fs-5 fw-semibold mb-q">Parts Required</div>
					<div className="divider-list-wrap flex-wrap border-0">
						{job?.parts.map((part, index) => (
							<>
								<div className="divider-list-wrap-flex">
									<div className="d-flex justify-content-between align-items-center">
										<div className="fs-6 text-muted">Part Name</div>
										<div className="fs-6 text-dark fw-semibold">{part?.name}</div>
									</div>
								</div>
								<div className="divider-list-wrap-auto">
									<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
								</div>
								<div className="divider-list-wrap-flex">
									<div className="d-flex justify-content-between align-items-center">
										<div className="fs-6 text-muted">Cost</div>
										<div className="fs-6 text-dark fw-semibold">$ {part?.cost}</div>
									</div>
								</div>
								<div className="divider-list-wrap-full-col mt-3 pt-3 border-top">
									<div className="fs-6 text-muted pb-2">Comment</div>
									<div className="fs-6 text-dark fw-semibold">
										{part?.comments}
									</div>
								</div>
							</>
						))
						}
					</div>
				</div>

				<div className="divider-list mt-4">
					<div className="divider-list-wrap border-0">
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-muted">Assigned Mechanic</div>
								<div className="fs-6 text-dark fw-semibold">{job?.mechanic?.firstName} {job?.mechanic?.lastName}</div>
							</div>
						</div>
						<div className="divider-list-wrap-auto">
							<div className="vr mx-3 d-none d-md-flex col-auto px-0" />
						</div>
						<div className="divider-list-wrap-flex">
							<div className="d-flex justify-content-between align-items-center">
								<div className="fs-6 text-muted">Date</div>
								<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
									{new Date(job?.start).toLocaleDateString()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WorkOrderStep4;
