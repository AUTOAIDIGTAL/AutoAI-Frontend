import React, { useState } from "react";
import { Dropdown, Table } from "react-bootstrap";

const MechanicDashboardlTable = ({ handleShow }) => {
	return (

		<Table hover responsive>
			<thead>
				<tr>
					<th className="text-muted">Job</th>
					<th className="text-muted">Vehicle Registration</th>
					<th className="text-muted">Customer Name</th>
					<th className="text-muted">Priority</th>
					<th className="text-muted">Deadline</th>
					<th className="text-muted">Status</th>
					<th className="text-muted"></th>
				</tr>
			</thead>
			<tbody>
				{Array.from({ length: 8 }).map((_, index) => (
					<tr key={index} onClick={handleShow}>
						<td>
							<div className="text-dark">Brake Change</div>
						</td>
						<td>
							<div className="text-muted">AAA - 001</div>
						</td>
						<td>
							<div className="text-muted">Customer Name</div>
						</td>
						<td>
							<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">High</div>
						</td>
						<td>
						<div className="fs-6 fw-normal rounded badge bg-light text-dark">
							On Hold
							</div>
						</td>
						<td className="align-middle">
							<div className="fs-6 fw-normal rounded badge bg-light text-dark">
							2024-03-09 / 10:00PM
							</div>
						</td>
						<td className="align-middle text-end" colSpan={2}>
							<Dropdown className="position-static">
								<Dropdown.Toggle
									variant="blank-icon"
									className="btn-remove-arrow"
									id="dropdown-basic"
								>
									<svg
										width="20px"
										height="20px"
										viewBox="0 0 16 16"
										xmlns="http://www.w3.org/2000/svg"
										fill="#000000"
										className="bi bi-three-dots-vertical"
									>
										<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
									</svg>
								</Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item className="d-flex align-items-center gap-1">
										<i className="icon-pencil"></i>
										Edit
									</Dropdown.Item>
									<Dropdown.Item className="d-flex align-items-center gap-1">
										<i className="icon-trash-2"></i>
										Delete
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default MechanicDashboardlTable;
