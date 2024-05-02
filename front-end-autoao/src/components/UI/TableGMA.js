import EditGarageOwner from "@/app/(pages)/(dashboard)/manage-administration/edit-modal/modal";
import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";
const TableGMA = ({ adminList, handleRefetch }) => {
	console.log(adminList);
	return (
		<>
			<Table hover responsive>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Garage Name</th>
						<th>Address</th>
						<th>Roles</th>
						<th>Contact Number</th>
						<th></th>
					</tr>
				</thead>
				<tbody >
					{adminList && adminList?.map((item, index) => (
						<tr key={index}>
							<td>{item?.firstName} {item?.lastName}</td>
							<td>{item?.email}</td>
							<td>{item?.garageId?.name || 'N/A'}</td>
							<td>{item?.address?.street || 'N/A'}</td>
							<td>{item?.roles}</td>
							<td className="align-middle">
								<div className="d-flex align-items-center gap-2 h-100">
									<Badge bg="light" className="fw-normal rounded-ai">
										{item?.phoneNumber}									</Badge>
								</div>
							</td>
							<td className="align-middle text-end" colSpan={2}>
								<Dropdown>
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
										{/* <Dropdown.Item
											className="d-flex align-items-center gap-2"
											href="#/action-1"
										>
											<svg
												className="edit-svg-btn"
												width={16}
												height={16}
												viewBox="0 0 17 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12.3965 0.146569C12.5917 -0.0486935 12.9083 -0.0486935 13.1036 0.146569L16.1036 3.14657C16.2988 3.34183 16.2988 3.65841 16.1036 3.85368L6.10357 13.8537C6.05569 13.9016 5.99858 13.9392 5.93571 13.9644L0.93571 15.9644C0.750001 16.0386 0.537892 15.9951 0.396461 15.8537C0.25503 15.7122 0.211493 15.5001 0.285776 15.3144L2.28578 10.3144C2.31092 10.2516 2.34858 10.1944 2.39646 10.1466L12.3965 0.146569ZM11.4571 2.50012L13.75 4.79302L15.0429 3.50012L12.75 1.20723L11.4571 2.50012ZM13.0429 5.50012L10.75 3.20723L4.25001 9.70723V10.0001H4.75001C5.02616 10.0001 5.25001 10.224 5.25001 10.5001V11.0001H5.75001C6.02616 11.0001 6.25001 11.224 6.25001 11.5001V12.0001H6.54291L13.0429 5.50012ZM3.28167 10.6756L3.17614 10.7811L1.64754 14.6026L5.46903 13.074L5.57456 12.9685C5.38496 12.8974 5.25001 12.7145 5.25001 12.5001V12.0001H4.75001C4.47387 12.0001 4.25001 11.7763 4.25001 11.5001V11.0001H3.75001C3.53561 11.0001 3.35272 10.8652 3.28167 10.6756Z"
													fill="black"
												/>
											</svg> */}
										<EditGarageOwner owner={item} onOwnerUpdated={handleRefetch} />
										{/* </Dropdown.Item> */}
										<Dropdown.Item
											className="d-flex align-items-center gap-2"
											href="#/action-2"
										>
											<svg
												className="del-svg-btn"
												width={16}
												height={16}
												viewBox="0 0 17 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M3.98372 4.57143L5.25655 12.4266C5.32352 12.8399 5.67118 13.1429 6.07855 13.1429H9.92145C10.3288 13.1429 10.6765 12.8399 10.7434 12.4266L12.0163 4.57143H3.98372ZM4.43456 12.5675C4.5685 13.3941 5.26381 14 6.07855 14H9.92145C10.7362 14 11.4315 13.3941 11.5654 12.5675L13 3.71429H3L4.43456 12.5675Z"
													fill="black"
												/>
												<path
													d="M13 3.71429C13 4.66106 10.7614 5.42857 8 5.42857C5.23858 5.42857 3 4.66106 3 3.71429C3 2.76751 5.23858 2 8 2C10.7614 2 13 2.76751 13 3.71429Z"
													fill="black"
												/>
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M12.0839 3.71429C11.9339 3.59496 11.6693 3.45147 11.272 3.31526C10.473 3.0413 9.31607 2.85714 8 2.85714C6.68393 2.85714 5.52704 3.0413 4.72799 3.31526C4.33071 3.45147 4.06614 3.59496 3.91613 3.71429C4.06614 3.83362 4.33071 3.9771 4.72799 4.11331C5.52704 4.38727 6.68393 4.57143 8 4.57143C9.31607 4.57143 10.473 4.38727 11.272 4.11331C11.6693 3.9771 11.9339 3.83362 12.0839 3.71429ZM8 5.42857C10.7614 5.42857 13 4.66106 13 3.71429C13 2.76751 10.7614 2 8 2C5.23858 2 3 2.76751 3 3.71429C3 4.66106 5.23858 5.42857 8 5.42857Z"
													fill="black"
												/>
											</svg>
											Delete
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default TableGMA;
