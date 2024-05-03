"use client"
import React, { Suspense, useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Slide from "@/components/Carousel/slide";
import { useSearchParams } from "next/navigation";
import OTP from "../../(dashboard)/profile/change-password/OTP";

const ResetPassword = () => {

	const searchParams = useSearchParams()
	const search = searchParams.get('email')
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [otpModal, setOtpModal] = useState(false);


	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
		setErrorMessage('');
	};

	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
		setErrorMessage('');
	};

	useEffect(() => {
		setEmail(search)
	}, [search])

	const handleSubmission = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			setErrorMessage('Passwords do not match. Please try again.');
		} else {
			setOtpModal(true)
		}
	}

	return (
		<Suspense>
			<div className="auth-page align-items-center px-5 py-5">
				<Container>
					<Row className="g-5 justify-content-center">
						<Col md={12} lg={5} xxl={5}>
							<div>
								<Image
									className="mb-4 d-block d-lg-inline-block mx-auto"
									src="./../../assets/images/brand/logo.svg"
									alt="logo"
									width={180}
									height={57}
									priority
								/>
							</div>
							<Link href="/login" className="btn btn-secondary fw-medium d-flex justify-content-center d-lg-inline-flex gap-2 mt-2 mb-3">
								<svg
									width={16}
									height={15}
									viewBox="0 0 16 15"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M6.60273 1.85797H13.6829C14.2351 1.85797 14.6829 2.30569 14.6829 2.85797V12.858C14.6829 13.4103 14.2351 13.858 13.6829 13.858H6.60273C6.31081 13.858 6.03346 13.7304 5.84347 13.5088L0.999939 7.85797L5.84347 2.20718C6.03346 1.98553 6.31081 1.85797 6.60273 1.85797ZM13.6829 0.857971C14.7874 0.857971 15.6829 1.7534 15.6829 2.85797V12.858C15.6829 13.9625 14.7874 14.858 13.6829 14.858H6.60273C6.01888 14.858 5.46418 14.6028 5.08422 14.1596L0.240683 8.50876C-0.0803089 8.13427 -0.0803089 7.58167 0.240683 7.20718L5.08422 1.55639C5.46418 1.1131 6.01888 0.857971 6.60273 0.857971H13.6829ZM5.82931 5.00442C5.63405 5.19968 5.63405 5.51626 5.82931 5.71152L7.97575 7.85797L5.82931 10.0044C5.63405 10.1997 5.63405 10.5163 5.82931 10.7115C6.02457 10.9068 6.34115 10.9068 6.53642 10.7115L8.68286 8.56508L10.8293 10.7115C11.0246 10.9068 11.3412 10.9068 11.5364 10.7115C11.7317 10.5163 11.7317 10.1997 11.5364 10.0044L9.38997 7.85797L11.5364 5.71152C11.7317 5.51626 11.7317 5.19968 11.5364 5.00442C11.3412 4.80916 11.0246 4.80916 10.8293 5.00442L8.68286 7.15086L6.53642 5.00442C6.34115 4.80916 6.02457 4.80916 5.82931 5.00442Z"
										fill="#1474FB"
									/>
								</svg>
								Back to Log in screen
							</Link>
							<div className="fs-2 fw-bold text-dark text-center text-lg-start">Create New Password</div>
							<div className="fs-6 text-muted mb-4 pb-2 text-center text-lg-start">Set Your New Password</div>
							<Form onSubmit={handleSubmission}>
								<div className="mb-3">
									<Form.Label>New Password</Form.Label>
									<div className="position-relative FormIconControl">
										<span className="position-absolute top-50 start-20 translate-middle">
											<span span className="mdi mdi-email-outline"></span>
										</span>
										<Form.Control type="text" placeholder="New Password" value={password} onChange={handlePasswordChange} />
									</div>
								</div>
								<div className="mb-3">
									<Form.Label>Confirm New Password</Form.Label>
									<div className="position-relative FormIconControl">
										<span className="position-absolute top-50 start-20 translate-middle">
											<span span className="mdi mdi-email-outline"></span>
										</span>
										<Form.Control type="text" placeholder="Confirm New Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
									</div>
									{errorMessage && <small className="font-red">{errorMessage}</small>}
								</div>
								<Button variant="primary" className="w-100 mt-2" type="submit">
									Save Password & Log in
								</Button>
							</Form>
						</Col>
						<Col md={12} lg={5} xxl={6}>
							<div className="bg-primary-light rounded-5 py-5 px-4 d-none d-lg-block">
								<Slide />
							</div>
						</Col>
					</Row>
				</Container>
				{otpModal && <OTP otpModal={otpModal} password={password} email={email} />}
			</div>
		</Suspense>
	);
};

export default ResetPassword;
