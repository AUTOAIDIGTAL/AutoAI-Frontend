import { constants } from "@/app/(pages)/(dashboard)/garage-management/constant";
import EditModal from "@/app/(pages)/(dashboard)/vehicle-management/edit-modal/edit";
import { apiService } from "@/services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";

const TableVM = ({ vehicleList, handleRefetch }) => {

	const deleteItem = async (e, id) => {
		e.preventDefault();
		await apiService.delete(`${constants.vehicle}/${id}`);
		handleRefetch()
	}

	const router = useRouter();

	return (
		<>
			<Table hover responsive>
				<thead>
					<tr>
						<th>Registration Plate</th>
						<th>Owner Name</th>
						<th>Company</th>
						<th>Make Model</th>
						<th>Phone</th>
						<th>Additional Detail</th>
						<th></th>
					</tr>
				</thead>
				<tbody >
					{vehicleList?.map((item, index) => (
						<tr key={index}>
							<td className="fw-semibold text-dark">
								<Link href={`/vehicle-management/${encodeURIComponent(item._id)}`} key={index} className="text-black no-underline">
									{item?.regPlate}
								</Link>
							</td>
							<td>{item?.owner?.name}</td>
							<td>{item?.make}</td>
							<td>{item?.make} - {item?.model}</td>
							<td className="align-middle">
								<div className="d-flex align-items-center gap-2 h-100">
									<Badge bg="light" className="fw-normal rounded-ai fs-6">
										{item?.owner?.phoneNumber}</Badge>
								</div>
							</td>
							<td>{item?.color} - {item?.fuelType}</td>
							<td className="align-middle text-end" colSpan={2}>
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
										<div className="border-none manage-btn-drop">
											<EditModal onVehicleUpdated={handleRefetch} vehicle={item} />
										</div>
										<Dropdown.Item className="d-inline-flex align-items-center" onClick={(e) => deleteItem(e, item._id)}><i className="icon-trash pe-1 text-danger"></i> Delete</Dropdown.Item>
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

export default TableVM;
