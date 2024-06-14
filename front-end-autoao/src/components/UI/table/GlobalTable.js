import React, { useState } from "react";
import { Table } from "react-bootstrap";

const GlobalTable = ({ handleShow }) => {
	return (
	
			<Table hover responsive>
				<thead>
					<tr>
						<th className="text-muted">Registration</th>
						<th className="text-muted">Customer Name</th>
						<th className="text-muted">Job</th>
						<th className="text-muted">Assigned Mechanic</th>
						<th className="text-muted">Priority</th>
						<th className="text-muted">Deadline</th>
					</tr>
				</thead>
				<tbody>
					{Array.from({ length: 8 }).map((_, index) => (
						<tr key={index} onClick={handleShow}>
							<td>
								<div className="text-dark">T-001</div>
							</td>
							<td>
								<div className="text-muted">Customer Name</div>
							</td>
							<td>
								<div className="text-muted">Job</div>
							</td>
							<td>
								<div className="text-muted">Assigned Mechanic</div>
							</td>
							<td>
								<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">High</div>
							</td>
							<td className="align-middle">
									<div className="fs-6 fw-normal rounded badge bg-light text-dark">
										2024-03-09
									</div>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
	);
};

export default GlobalTable;
