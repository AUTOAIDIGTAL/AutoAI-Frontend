"use client";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Calendar } from "react-multi-date-picker";
import AssignGretchen from "../../../work-order/stepfour/(assign-modal)/assign-modal";
import { apiService } from "@/services";
import { constants } from "../../../garage-management/constant";
import { useParams, useRouter } from "next/navigation";
import { message } from "antd";

const AssignMechanic = () => {
	const [value, setValue] = useState(new Date());
	const [services, setServices] = useState([]);
	const [activeService, setActiveService] = useState(null);
	const [mechanics, setMechanics] = useState(null);
	const [date, setDate] = useState(null);
	const [mechanicAssigned, setMechanicAssigned] = useState(null);
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const router = useRouter();
	const params = useParams();

	console.log(params.serviceId)
	console.log(params.jobId)

	useEffect(() => {
		if (services.length > 0) {
			setActiveService(services[0]?.id);
		}
	}, [services]);

	useEffect(() => {
		const getMechanics = async () => {
			try {
				const day = days[value?.getDay()];
				const response = await apiService.getWithParams(`${constants.mechanicByService}/${params.serviceId}`, { day });
				if (response) {
					setMechanics(response);
					setDate(value);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getMechanics();
	}, [params.id]);

	const handleMechanicAssigned = () => {
		message.success("Mechanic assigned successfully", 2.5);
		router.push('/scheduled-tasks');
	};

	return (
		<>
			<div className="min-screen-layout mt-3 py-4">
				<div className="bg-white p-2 p-lg-4 rounded-ai-md shadow-sm">
					<Row>
						<Col md={8}>
							<div className="fs-4 fw-semibold mb-4">
								Date and Time Selection
							</div>
							<Calendar
								className="auto-ai-calendar"
								value={value}
								onChange={(e) => setValue(e.toDate())}
							>
								<div className="d-flex justify-content-center pt-4 gap-3">
									<button
										className="btn btn-soft-primary"
										onClick={() => setValue(undefined)}
									>
										DESELECT
									</button>
									<button
										className="btn btn-primary"
										onClick={() => setValue(new Date())}
									>
										TODAY
									</button>
								</div>
							</Calendar>
						</Col>
						<Col md={4}>
							<div className="bg-gray-100 p-4 rounded-ai-md mb-5">
								<div className="fs-6 fw-semibold mb-3">Mechanics</div>
								{
									mechanics?.length ? (
										mechanics.map((mechanic) => (
											<div key={mechanic?.id} className="bg-white p-4 rounded-ai-md mb-3">
												<div className="d-flex flex-wrap justify-content-between">
													<div className="fs-6 text-muted">Mechanic Name</div>
													<div className="small fw-semibold">
														{mechanic?.user?.firstName} {mechanic?.user?.lastName}
													</div>
												</div>
												{
													<AssignGretchen
														mechanic={mechanic}
														service={params.jobId}
														date={date}
														onMechanicAssigned={handleMechanicAssigned}
													/>
												}
											</div>
										))
									) : (
										<div className="bg-white p-4 rounded-ai-md mb-3">
											<div className="d-flex flex-wrap justify-content-center">
												<div className="fs-5 text-center">No Mechanics available on this day!</div>
												<small className="fs-10 text-muted text-center">
													Select another day to get mechanics
												</small>
											</div>
										</div>
									)
								}
							</div>
						</Col>
					</Row>
					<div className="d-flex justify-content-between mt-3 gap-2">
						<Button variant="outline-secondary fs-6" size="sm" onClick={() => { router.push('/work-order') }}>
							Cancel
						</Button>
						<div className="d-flex justify-content-between gap-2">
							<Button variant="outline-primary fs-6" size="sm" onClick={() => router.push('/scheduled-tasks')}>
								Back
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AssignMechanic;
