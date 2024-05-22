"use client";
import AvatarEdit from "@/components/UI/AvatarEdit";
import { apiService } from "@/services";
import Multiselect from "multiselect-react-dropdown";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { constants } from "../../../garage-management/constant";
import { message } from "antd";

const MechanicInformation = () => {

	const skillsRef = useRef(null);
	const params = useParams();
	const router = useRouter()

	const [options, setOptions] = useState([])
	const [mechanic, setMechanic] = useState(null);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [address, setAddress] = useState({
		street: "",
		city: "",
		country: "",
		postalCode: "",
	});
	const [phoneNumber, setPhoneNumber] = useState("");
	const [emergencyContactNumber, setEmergencyContactNumber] = useState("");
	const [workSchedule, setWorkSchedule] = useState([]);
	const [services, setServices] = useState([])
	const [profileImage, setProfileImage] = useState(null);
	const initialDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

	const [fields, setFields] = useState(
		initialDays.reduce((acc, day) => ({ ...acc, [day]: [{ start: '', end: '' }] }), {})
	);

	const [unavailableDays, setUnavailableDays] = useState(
		initialDays.reduce((acc, day) => ({ ...acc, [day]: false }), {})
	);

	useEffect(() => {
		const getMechanic = async () => {
			try {
				const data = await apiService.get(`${constants.mechanic}/${params.id}`)
				console.log(data)
				if (data) {
					setMechanic(data)
					setFirstName(data?.user?.firstName)
					setLastName(data?.user?.lastName)
					setPhoneNumber(data?.user?.phoneNumber)
					setAddress(data?.user?.address)
					setEmergencyContactNumber(data?.emergencyContactNo)
					setServices(data?.services.map((service, index) => {
						return {
							name: service.name,
							id: service._id,
							key: index
						}
					}))
					setProfileImage(data?.profileImage)

					const fetchedSchedule = data.schedule.reduce((acc, daySchedule) => {
						const day = daySchedule.day.charAt(0).toUpperCase() + daySchedule.day.slice(1); // Capitalize the day
						acc[day] = daySchedule.slots.map(slot => ({ start: slot.start, end: slot.end }));
						return acc;
					}, {});

					setFields(prevFields => ({ ...prevFields, ...fetchedSchedule }));

					const unavailableDays = data.schedule.reduce((acc, daySchedule) => {
						const day = daySchedule.day.charAt(0).toUpperCase() + daySchedule.day.slice(1);
						acc[day] = !daySchedule.available;
						return acc;
					}, {});

					setUnavailableDays(prevUnavailableDays => ({ ...prevUnavailableDays, ...unavailableDays }));
				}
			} catch (error) {
				console.log(error);
			}
		}

		getMechanic();
	}, [params.id])

	useEffect(() => {
		const getSkills = async () => {
			try {
				const response = await apiService.get(constants.jobs)
				if (response) {
					const skills = response.map((skill, index) => {
						return { key: index, name: skill.name, id: skill._id }
					})

					console.log('SKILLS WITH KEY', skills)
					setOptions(skills)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getSkills();
	}, [mechanic])

	const handleAddFields = (day) => {
		setFields({
			...fields,
			[day]: [...fields[day], { start: '', end: '' }],
		});
	};

	const handleChange = (day, idx, field, value) => {
		const newFields = fields[day].map((item, index) => {
			if (index === idx) {
				return { ...item, [field]: value };
			}
			return item;
		});

		setFields({ ...fields, [day]: newFields });
	};

	const handleCheckboxChange = (day) => {
		setUnavailableDays({
			...unavailableDays,
			[day]: !unavailableDays[day],
		});
	};

	const getPreviousEndTime = (day, idx) => {
		if (idx === 0) {
			return null;
		}
		return fields[day][idx - 1].end;
	};

	const handleLocationChange = (e) => {
		const { name, value } = e.target;
		setAddress((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		try {

			const schedule = initialDays.map(day => ({
				day: day.toLowerCase(),
				slots: fields[day],
				available: !unavailableDays[day]
			}));

			const data = {
				firstName,
				lastName,
				phoneNumber,
				emergencyContactNo: emergencyContactNumber,
				schedule,
				services: skillsRef.current.getSelectedItems().map((skill) => skill.id),
				address,
				profileImage
			}

			const response = apiService.put(`${constants.mechanic}/${params.id}`, data)
			if (response) {
				message.success('Profile updated successfully', 2.5);
				router.push(`/mechanic-management/${params.id}`)
			} else {
				throw new Error('Failed to update profile')
			}
		} catch (error) {
			console.log(error)
			message.error('Failed to update profile', 2.5);
		}
	}


	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4 d-flex flex-column">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Edit Details</div>
				</div>
				<div className="flex-1 pt-3">
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Row className="g-4">
							<Col xs={12} md={6} xl={3}>
								<Form.Group controlId="formGroupEmail">
									<Form.Label>Full Name</Form.Label>
									<Form.Control type="text" placeholder="Full Name" onChange={(e) => { setFirstName(e.target.value) }} value={firstName} />
								</Form.Group>
							</Col>
							<Col xs={12} md={6} xl={3}>
								<Form.Group controlId="formGroupEmail">
									<Form.Label>Last Name</Form.Label>
									<Form.Control type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value) }} value={lastName} />
								</Form.Group>
							</Col>
							<Col xs={12} md={6} xl={3}>
								{" "}
								<Form.Group controlId="formGroupPassword">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control type="text" placeholder="Phone Number" onChange={(e) => { setPhoneNumber(e.target.value) }} value={phoneNumber} />
								</Form.Group>
							</Col>
							<Col xs={12} md={6} lg={6}>
								{" "}
								<Form.Group controlId="formGroupPassword">
									<Form.Label>Emergency Contact Number</Form.Label>
									<Form.Control
										type="text"
										placeholder="Emergency Contact Number"
										onChange={(e) => { setEmergencyContactNumber(e.target.value) }}
										value={emergencyContactNumber}
									/>
								</Form.Group>
							</Col>
							<Col xs={12} md={6} lg={6}>
								<div className="form-label">Skills</div>
								<div className="rounded-ai-md border border-ai bg-gray-100 gap-3 p-2">
									<Multiselect
										isObject={true}
										options={options}
										displayValue="key"
										selectedValues={services}
										ref={skillsRef}
									/>
								</div>
							</Col>
						</Row>
						<div className="d-flex justify-content-between align-items-center top-white-shadow mt-5">
							<div className="form-label">Profile Image</div>
							<div className="avatar">
								<AvatarEdit size="lg" />
							</div>
						</div>
						<hr className="text-muted my-5" />
						<div className="rounded-ai bg-gray-100 p-4">
							<div className="h6 mb-3">Address</div>
							<Row className="g-4">
								<Col xs={12} md={6} xl={3}>
									<Form.Group controlId="formGroupEmail">
										<Form.Label>Street name</Form.Label>
										<Form.Control type="text" placeholder="Street name" name="street" value={address?.street} onChange={handleLocationChange} />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} xl={3}>
									{" "}
									<Form.Group controlId="formGroupPassword">
										<Form.Label>Country</Form.Label>
										<Form.Control type="text" placeholder="Country" name="country" value={address?.country} onChange={handleLocationChange} />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} xl={3}>
									{" "}
									<Form.Group controlId="formGroupPassword">
										<Form.Label>City/ Post Town</Form.Label>
										<Form.Control type="text" placeholder="City/ Post Town" name="city" value={address?.city} onChange={handleLocationChange} />
									</Form.Group>
								</Col>
								<Col xs={12} md={6} xl={3}>
									{" "}
									<Form.Group controlId="formGroupPassword">
										<Form.Label>Post Code</Form.Label>
										<Form.Control type="number" placeholder="Post Code" name="postalCode" value={address?.postalCode} onChange={handleLocationChange} />
									</Form.Group>
								</Col>
							</Row>
						</div>
						<div className="h6 pt-4 mb-3">Work Schedule</div>
						<ul className="work-Schedule-wrap">
							{initialDays.map((day) => (
								<li key={day}>
									<Row className="g-4 align-items-center">
										<Col className="col-12 col-xl-4 col-xxl">
											<div className="h6 mb-3">{day}</div>
											<Form.Group className="text-muted" controlId={`formBasicCheckbox-${day}`}>
												<Form.Check
													type="checkbox"
													label="Unavailable"
													checked={unavailableDays[day]}
													onChange={() => handleCheckboxChange(day)}
												/>
											</Form.Group>
										</Col>
										<Col className="col-12 col-xl-4 col-xxl-4">
											<div className="flex">
												{fields[day].map((field, idx) => (
													<Row key={idx}>
														<Col>
															<Form.Group controlId={`start-${day}-${idx}`}>
																<Form.Label>Start Time</Form.Label>
																<Form.Control
																	type="time"
																	value={field.start || ''}
																	onChange={(e) =>
																		handleChange(day, idx, 'start', e.target.value)
																	}
																	disabled={unavailableDays[day]}
																	min={getPreviousEndTime(day, idx) || '00:00'}
																	max={field.end || '23:59'}
																/>
															</Form.Group>
														</Col>
														<Col>
															<Form.Group controlId={`end-${day}-${idx}`}>
																<Form.Label>End Time</Form.Label>
																<Form.Control
																	type="time"
																	value={field.end || ''}
																	onChange={(e) =>
																		handleChange(day, idx, 'end', e.target.value)
																	}
																	disabled={unavailableDays[day]}
																	min={field.start || '00:00'}
																/>
															</Form.Group>
														</Col>
													</Row>
												))}
											</div>
										</Col>
										<Col lg={"auto"} className="d-flex justify-content-end mt-xl-auto">
											<Button
												variant="soft-primary rounded-pill p-3 d-flex"
												onClick={() => handleAddFields(day)}
												disabled={unavailableDays[day]}
											>
												<i className="icon-plus fs-4"></i>
											</Button>
										</Col>
									</Row>
								</li>
							))}
						</ul>
						<div className="d-flex justify-content-between align-items-center top-white-shadow mt-5">
							<Button onClick={() => router.back()} variant="outline-secondary">Cancel</Button>
							<div className="d-flex align-items-center gap-2">
								<Button type="submit" variant="primary">Update Information</Button>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</>
	);
};

export default MechanicInformation;
