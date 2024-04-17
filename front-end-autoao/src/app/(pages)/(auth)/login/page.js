import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Slide from "@/components/Carousel/slide";

const Login = () => {
	return (
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
						<div className="fs-2 fw-bold text-dark text-center text-lg-start">
							Welcome Back to Auto AI!
						</div>
						<div className="fs-6 text-muted mb-4 pb-2 text-center text-lg-start">Create Your Account</div>
						<Form>
							<div className="mb-3">
								<Form.Label>Email address</Form.Label>
								<div className="position-relative FormIconControl">
									<span className="position-absolute top-50 start-20 translate-middle">
										<span span className="mdi mdi-email-outline"></span>
									</span>
									<Form.Control type="email" placeholder="Email Address" />
								</div>
							</div>
							<div className="mb-3">
								<Form.Label>Password</Form.Label>
								<div className="position-relative FormIconControl">
									<span className="position-absolute top-50 start-20 translate-middle">
										<svg
											width={16}
											height={9}
											viewBox="0 0 16 9"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M0 4.85797C0 2.64883 1.79086 0.857971 4 0.857971C5.48128 0.857971 6.77364 1.66316 7.46476 2.85797H14C14.1326 2.85797 14.2598 2.91065 14.3536 3.00442L15.8536 4.50442C16.0488 4.69968 16.0488 5.01626 15.8536 5.21152L14.3536 6.71152C14.1583 6.90679 13.8417 6.90679 13.6464 6.71152L13 6.06508L12.3536 6.71152C12.1583 6.90679 11.8417 6.90679 11.6464 6.71152L11 6.06508L10.3536 6.71152C10.1583 6.90679 9.84171 6.90679 9.64645 6.71152L9 6.06508L8.35355 6.71152C8.25979 6.80529 8.13261 6.85797 8 6.85797H7.46476C6.77364 8.05278 5.48128 8.85797 4 8.85797C1.79086 8.85797 0 7.06711 0 4.85797ZM4 1.85797C2.34315 1.85797 1 3.20112 1 4.85797C1 6.51483 2.34315 7.85797 4 7.85797C5.19599 7.85797 6.22952 7.15814 6.71155 6.14342C6.79438 5.96908 6.97016 5.85797 7.16318 5.85797H7.79289L8.64645 5.00442C8.84171 4.80916 9.15829 4.80916 9.35355 5.00442L10 5.65086L10.6464 5.00442C10.8417 4.80916 11.1583 4.80916 11.3536 5.00442L12 5.65086L12.6464 5.00442C12.8417 4.80916 13.1583 4.80916 13.3536 5.00442L14 5.65086L14.7929 4.85797L13.7929 3.85797H7.16318C6.97016 3.85797 6.79438 3.74687 6.71155 3.57252C6.22952 2.55781 5.19599 1.85797 4 1.85797Z"
												fill="#A0AEC0"
											/>
											<path
												d="M4 4.85797C4 5.41026 3.55228 5.85797 3 5.85797C2.44772 5.85797 2 5.41026 2 4.85797C2 4.30569 2.44772 3.85797 3 3.85797C3.55228 3.85797 4 4.30569 4 4.85797Z"
												fill="#A0AEC0"
											/>
										</svg>
									</span>
									<Form.Control type="email" placeholder="Password" />
									<span className="position-absolute top-50 end-15 translate-middle">
										<span span className="mdi mdi-eye-outline"></span>
									</span>
								</div>
							</div>
							<Row className="row mb-3">
								<Col>
									<Form.Check type="checkbox" label="Check me out" />
								</Col>
								<Col sm="auto">
									<Link className="btn btn-link p-0" href="/forgot-password">Forgot Password?</Link>
								</Col>
							</Row>
							<Button variant="primary" className="w-100 mt-2">Log in</Button>
						</Form>
					</Col>
					<Col md={12} lg={5} xxl={6}>
						<div className="bg-primary-light rounded-5 py-5 px-4 d-none d-lg-block">
							<Slide />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default Login;
