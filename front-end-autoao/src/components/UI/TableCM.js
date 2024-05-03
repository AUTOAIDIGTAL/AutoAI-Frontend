import Link from "next/link";
import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";
const TableCM = ({ clients }) => {
	return (
		<>
			<Table hover responsive>
				<thead>
					<tr>
						<th>Name</th>
						<th>Number</th>
						<th>Email</th>
						<th>Address</th>
						<th>Company</th>
						<th>Vehicle/s Reg</th>
					</tr>
				</thead>
				<tbody >
					{clients?.map((data, index) => (
						<tr key={index}>
							<td className="fw-semibold text-dark">
								<Link href={`/client-management/${encodeURIComponent(data._id)}`} className="text-black no-underline">
									{data?.name}
								</Link></td>
							<td>{data?.phoneNumber}</td>
							<td>{data?.email}</td>
							<td>{data?.address.street}, {data?.address.city}, {data?.address.country}</td>
							<td>{data?.company}</td>
							<td>{data?.regPlate}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</>
	);
};

export default TableCM; // TODO; FIX THIS
