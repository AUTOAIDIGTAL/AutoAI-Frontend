import { constants } from "@/app/(pages)/(dashboard)/garage-management/constant";
import EditModal from "@/app/(pages)/(dashboard)/user-roles-management/edit-user/edit";
import UserForm from "@/app/(pages)/(dashboard)/user-roles-management/edit-user/edit";
import { apiService } from "@/services";
import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";
const TableUi = ({ users, handleRefetch }) => {

	const deleteItem = async (e, id) => {
		e.preventDefault();
		await apiService.delete(`${constants.createAdmin}/${id}`);
		handleRefetch()
	}

	return (

		<>
			<Table hover responsive>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Phones Number</th>
						<th>Roles</th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{users?.map((item, index) => (
						<tr key={index}>
							<td>{item?.firstName} {item?.lastName}</td>
							<td>{item?.email}</td>
							<td>{item?.phoneNumber}</td>
							<td className="align-middle" colSpan={3}>
								<div className="d-flex align-items-center gap-2 h-100">
									{item?.roles?.map((role, index) => (
										<Badge key={index} bg="light" className="fw-normal rounded-ai">
											{role}
										</Badge>
									))}
								</div>
							</td>
							<td className="align-middle text-end">
								<Dropdown className="position-static">
									<Dropdown.Toggle variant="blank-icon" className="btn-remove-arrow" id="dropdown-basic">
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
										<Dropdown.Item><UserForm userData={item} onUserAdded={handleRefetch} key={item._id} onUserUpdated={handleRefetch} /></Dropdown.Item>
										<Dropdown.Item onClick={(e) => deleteItem(e, item._id)}>Delete</Dropdown.Item>
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

export default TableUi;
