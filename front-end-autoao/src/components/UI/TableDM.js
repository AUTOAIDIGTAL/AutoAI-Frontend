import { useEffect, useState } from "react";
import { apiService } from "@/services";
import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";
import { constants } from "@/app/(pages)/(dashboard)/garage-management/constant";

const TableDM = (garageList) => {

	console.log('garageList', garageList);
	return (
		<>
			<Table hover responsive>
				<thead>
					<tr>
						<th>Owner Name</th>
						<th>Garage Name</th>
						<th>Address</th>
						<th>Roles</th>
						<th>Location</th>
						<th>Contact</th>
						<th></th>
					</tr>
				</thead>
				<tbody >
					{
						garageList?.data?.map((index) => (
							<tr key={index}>
								<td>{index?.ownerName}</td>
								<td>{index?.name}</td>
								<td>{`${index?.address?.street}, ${index?.address?.city}, ${index?.address?.country}`} </td>
								<td>Garage Admin</td>
								<td>{index?.address?.city}, {index?.address?.country}</td>
								<td className="align-middle">
									<div className="d-flex align-items-center gap-2 h-100">
										<Badge bg="light" className="fw-normal rounded-ai">
											{index?.phoneNumber}
										</Badge>
									</div>
								</td>
								<td className="align-middle text-end" colSpan={2}>
									<Dropdown>
										<Dropdown.Toggle variant="blank-icon" className="btn-remove-arrow" id="dropdown-basic">
											<svg
												width="20px"
												height="20px"
												viewBox="0 0 16 16"
												xmlns="http:www.w3.org/2000/svg"
												fill="#000000"
												className="bi bi-three-dots-vertical"
											>
												<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
											</svg>
										</Dropdown.Toggle>

										<Dropdown.Menu>
											<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
											<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
											<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</>
	);
};

export default TableDM;
