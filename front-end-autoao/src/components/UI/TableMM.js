import { constants } from "@/app/(pages)/(dashboard)/garage-management/constant";
import { apiService } from "@/services";
import { message } from "antd";
import { useRouter } from "next/navigation";
import {
	Tooltip,
	OverlayTrigger,
	Row,
	Col,
	Badge,
	Dropdown,
	Table,
	Popover,
	Button,
} from "react-bootstrap";


const Schedule = ({ scheduleData }) => {

	const popover = (
		<Popover style={{ width: "auto", minWidth: "350px", maxWidth: "350px" }}>
			<Popover.Body className="py-1 px-3">
				<div className="schedule-popover">
					<ul>
						<li>
							<Row className="g-2">
								<Col sm={6}>
									<div className="small text-dark">Day</div>
									<div className="text-dark fw-medium text-capitalize">Monday</div>
								</Col>
								<Col sm={6}>
									<div className="small text-dark">Time slot</div>
									<div className="text-muted" >
										<i className="icon-clock text-primary"></i> 10 PM  - 11 PM
									</div>
								</Col>
							</Row>
						</li>
					</ul>
				</div>
			</Popover.Body>
		</Popover>
	);

	return (
		<OverlayTrigger
			placement="auto-start"
			overlay={popover}
		>
			<div className="d-inline-block py-2 px-3 rounded-2 bg-soft-primary">
				Schedule
			</div>
		</OverlayTrigger>
	)
}

const TagsOverlay = ({ tags }) => {

	const popoverSkill = (
		tags
			?
			<Popover id="popover-skills" style={{ width: "auto", minWidth: "250px", maxWidth: "550px" }}>
				<Popover.Body>
					<div className="d-flex flex-wrap align-items-center gap-2">
						{tags.length ?
							tags.map((_, index) => (
								<Badge key={index} bg="light" className="fw-normal rounded-ai fs-base-13">
									{_?.name}
								</Badge>
							))
							: <div className="d-flex flex-wrap align-items-center gap-2">
								Add Skills to view here!
							</div>}

					</div>
				</Popover.Body>
			</Popover>
			:
			<Popover>
				<Popover.Body>
					<div className="d-flex flex-wrap align-items-center gap-2">
						Add Skills to view here!
					</div>
				</Popover.Body>
			</Popover >
	);

	return (
		<OverlayTrigger
			placement="auto-start"
			overlay={popoverSkill}
		>
			<i className="icon-eye"></i>
		</OverlayTrigger>

	)
}

const TableMM = ({ mechanicList, handleRefetch }) => {

	const router = useRouter()
	const handleDelete = async (id) => {
		message.open({
			type: 'loading',
			content: 'Deleting Profile...',
			duration: 0,
		});

		try {
			const response = await apiService.delete(`${constants.mechanic}/${id}`)
			if (response) {
				message.destroy()
				message.success('Profile deleted successfully', 2.5);
				handleRefetch()
			}
		} catch (error) {
			message.destroy()
			console.log(error)
			message.error('Failed to delete profile', 2.5);
		}
	}

	return (
		<>
			<Table hover responsive>
				<thead>
					<tr>
						<th>Mechanic</th>
						<th>Position</th>
						<th>Schedule</th>
						<th>Phone Number</th>
						<th>Skills</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{mechanicList.map((item, index) => (
						<tr style={{ cursor: 'pointer' }} key={index} >
							<td onClick={() => router.push(`mechanic-management/${item?.profile?._id}`)}>{item.firstName} {item.lastName}</td>
							<td>{item.roles.join(', ')}</td>
							<td>
								<Schedule scheduleData={item?.profile?.schedule} />
							</td>
							<td>{item.phoneNumber}</td>
							<td className="align-middle">
								<div className="d-flex align-items-center gap-2">
									{
										<div>
											{
												item?.profile?.services.slice(0, 3).map((service, index) => (
													<Badge key={index} bg="light" className="fw-normal rounded-ai py-2 fs-base-13">
														{service.name}
													</Badge>
												))
											}
											<TagsOverlay tags={item?.profile?.services} />
										</div>
									}
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
										<Dropdown.Item className="d-flex align-items-center gap-1" onClick={() => router.push(`mechanic-management/${item?.profile?._id}/edit`)}>
											<i className="icon-pencil"></i>
											Edit
										</Dropdown.Item>
										<Dropdown.Item className="d-flex align-items-center gap-1" onClick={() => handleDelete(item?.profile?._id)}>
											<i className="icon-trash-2"></i>
											Delete
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</td>
						</tr>
					))}
				</tbody>
			</Table >
		</>
	);
};

export default TableMM;
