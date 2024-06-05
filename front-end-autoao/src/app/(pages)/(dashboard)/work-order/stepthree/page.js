"use client";
import { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Nav, Navbar, Row } from "react-bootstrap";
import Wizard from "../wizard/page";
import { Calendar } from "react-multi-date-picker";
import AssignGretchen from "../stepfour/(assign-modal)/assign-modal";
import { WorkOrderContext } from "../workOrderContext";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";
import { useRouter } from "next/navigation";

const WorkOrderStep3 = () => {
	const { setFormStage, workOrder, setWorkOrder } = useContext(WorkOrderContext);
	const [value, setValue] = useState(new Date());
	const [services, setServices] = useState([]);
	const [activeService, setActiveService] = useState(null);
	const [mechanics, setMechanics] = useState(null);
	const [date, setDate] = useState(null);
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const router = useRouter()

	useEffect(() => {
		if (workOrder?.jobs) {
			setServices(workOrder.jobs.map((job) => {
				return { ...job.service, mechanic: job.mechanic?._id }
			}));
		}
	}, [workOrder]);

	useEffect(() => {
		setActiveService(services[0]?.id);
	}, [services]);

	useEffect(() => {
		const getMechanics = async () => {
			if (activeService && value) {
				try {
					const day = days[value?.getDay()];
					const response = await apiService.getWithParams(`${constants.mechanicByService}/${activeService}`, { day });
					if (response) {
						setMechanics(response);
						setDate(value);
					}
				} catch (error) {
					console.log(error);
				}
			}
		};
		getMechanics();
	}, [activeService, value]);

	const handleMechanicAssigned = () => {
		const currentIndex = services.findIndex(service => service.id === activeService);
		if (currentIndex >= 0 && currentIndex < services.length - 1) {
			setActiveService(services[currentIndex + 1].id);
		} else {
			setFormStage('4');
		}
	};

	// if () services.find((ser) => {
	// 	return ser._id == activeService
	// })


	return (
		<>
			<div className="min-screen-layout mt-3 py-4">
				<div className="bg-white p-2 p-lg-4 rounded-ai-md shadow-sm">
					<div className="bg-gray-100 p-2 p-lg-2 rounded-ai-md mb-5">
						<div className="d-lg-flex align-content-center gap-3 auto-ai-navbar">
							<Navbar className="mb-3 mb-lg-0">
								<Nav activeKey={activeService} onChange={(e) => { console.log(e) }} className="me-auto">
									{services && services.map((service, index) => (
										<Nav.Link key={service.id} eventKey={service.id} onClick={() => setActiveService(service.id)}>{service.description}</Nav.Link>
									))}
								</Nav>
							</Navbar>
						</div>
					</div>

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
								{mechanics?.length ? (
									mechanics.map((mechanic) => (
										<div key={mechanic?.id} className="bg-white p-4 rounded-ai-md mb-3">
											<div className="d-flex flex-wrap justify-content-between">
												<div className="fs-6 text-muted">Mechanic Name</div>
												<div className="small fw-semibold">
													{mechanic?.user?.firstName} {mechanic?.user?.lastName}
												</div>
											</div>

											<AssignGretchen
												mechanic={mechanic}
												service={activeService}
												date={date}
												onMechanicAssigned={handleMechanicAssigned}
											/>
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
								)}

							</div>
						</Col>
					</Row>
					<div className="d-flex justify-content-between mt-3 gap-2">
						<Button variant="outline-secondary fs-6" size="sm" onClick={() => { router.push('/work-order') }}>
							Cancel
						</Button>
						<div className="d-flex justify-content-between gap-2">
							<Button variant="outline-primary fs-6" size="sm" onClick={() => setFormStage(parseInt(formStage) - 1)}>
								Back
							</Button>
							<Button variant="primary fs-6" size="sm">
								Next
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WorkOrderStep3;
