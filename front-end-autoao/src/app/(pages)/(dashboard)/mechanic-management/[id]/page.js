'use client'
import MechanicInformationDetails from "@/components/UI/mechanic-information";
import { apiService } from "@/services";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { constants } from "../../garage-management/constant";

const MechanicInformation = () => {

	const [mechanic, setMechanic] = useState(null);
	const params = useParams();
	const router = useRouter();

	console.log(params)
	useEffect(() => {
		const getMechanic = async () => {
			try {
				const data = await apiService.get(`${constants.mechanic}/${params.id}`)
				console.log(data)
				if (data) {
					setMechanic(data)
				}
			} catch (error) {
				console.log(error);
			}
		}

		getMechanic();
	}, [])

	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Mechanic Information</div>
				</div>
				<div className="flex-1 pt-3">
					<MechanicInformationDetails mechanic={mechanic} />
					<Row className="g-4">
						<Col lg={6}>
							<div className="rounded-5 p-4 bg-gray-100">
								<div className="fs-5 fw-medium pt-1 pb-3">Work Schedule </div>
								<div className="schedule-popover bg-white rounded-5 py-2 px-4">
									<ul>
										{
											Array.from({ length: 5 }, (_, index) => (
												<li key={index}>
													<Row className="g-2">
														<Col sm={6}>
															<div className="small text-dark">Day</div>
															<div className="text-dark fw-medium">Monday</div>
														</Col>
														<Col sm={6}>
															<div className="small text-dark">Time slot</div>
															<div className="text-muted">
																<i className="icon-clock text-primary"></i> 10:00 AM - 12:00 AM
															</div>
														</Col>
													</Row>
												</li>
											))
										}
									</ul>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<div className="rounded-5 p-4 bg-gray-100">
								<div className="fs-5 fw-medium pt-1 pb-3">Availability</div>
								<div className="schedule-popover bg-white rounded-5 py-2 px-4">
									<ul>
										{mechanic?.schedule.map((_, index) => (
											_.available == true ?
												<li key={index} >
													<Row className="g-2">
														<Col sm={6}>
															<div className="small text-dark">Day</div>
															<div className="text-dark fw-medium text-capitalize">{_.day}</div>
														</Col>
														<Col sm={6}>
															<div className="small text-dark">Time slot</div>
															{
																_?.slots.map((_, i) => (
																	<div key={i} className="text-muted">
																		<i className="icon-clock text-primary"></i>  {_.start || ''} - {_.end || ''}
																	</div>
																))
															}
														</Col>
													</Row>
												</li> : <li key={index}>
													<Row className="align-items-center" >
														<Col sm={6} className="schedule-popover-left">
															<div className="small text-dark">Day</div>
															<div className="text-dark fw-medium text-capitalize">{_?.day}</div>
														</Col>
														<Col sm={6} className="text-end">
															<div className="d-inline-block py-2 px-3 rounded-2 border bg-soft-danger">
																Unavailable
															</div>
														</Col>
													</Row>
												</li>
										))}

									</ul>
								</div>
							</div>
						</Col>
					</Row>
					<div className="d-flex justify-content-between align-items-center top-white-shadow my-4">
						<Button onClick={() => router.back()} variant="outline-secondary">Go Back</Button>
						<div className="d-flex align-items-center gap-2">
							<Button onClick={() => router.push(`${mechanic._id}/edit`)} variant="outline-primary">Edit</Button>
							<Button variant="outline-danger">Delete</Button>
						</div>
					</div>
				</div>
			</div >
		</>
	);
};

export default MechanicInformation;
