"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { apiService } from "@/services";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useRouter } from "next/navigation";
import Timer from "@/components/UI/modal-components/timer";

const OTP = ({ otpModal, password, email, onSuccess }) => {

	const [show, setShow] = useState(otpModal);
	const [otp1, setOTP1] = useState(null);
	const [otp2, setOTP2] = useState(null);
	const [otp3, setOTP3] = useState(null);
	const [otp4, setOTP4] = useState(null);
	const { user: currentUser, refetchUser } = useCurrentUser()
	const router = useRouter();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const changePassword = async () => {
		const otpString = `${otp1}${otp2}${otp3}${otp4}`

		try {

			const response = await apiService.post("/user/reset-password", {
				otp: otpString,
				newPassword: password,
				email
			});

			if (response && currentUser) {
				setShow(false);
				onSuccess()
				await refetchUser(currentUser._id);
			} else if (response && !currentUser) {
				setShow(false);
				router.push("/login");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSubmitOtp = (e) => {
		e.preventDefault();
		try {
			changePassword();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<Modal size="sm" show={show} onHide={handleClose} centered scrollable>
				<Modal.Header closeButton>
					<Modal.Title>OTP</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmitOtp}>
						<Form.Group
							className="mb-2 d-flex gap-3"
							controlId="formBasicPassword"
						>
							<Form.Control
								className="text-center"
								type="text"
								placeholder="0"
								value={otp1}
								onChange={(e) => { e.target.value.length > 1 ? e.target.value = e.target.value.slice(0, 1) : setOTP1(e.target.value) }}

							/>
							<Form.Control
								className="text-center"
								type="text"
								placeholder="0"
								value={otp2}
								onChange={(e) => { e.target.value.length > 1 ? e.target.value = e.target.value.slice(0, 1) : setOTP2(e.target.value) }}
							/>
							<Form.Control
								className="text-center"
								type="text"
								placeholder="0"
								value={otp3}
								onChange={(e) => { e.target.value.length > 1 ? e.target.value = e.target.value.slice(0, 1) : setOTP3(e.target.value) }}
							/>
							<Form.Control
								className="text-center"
								type="text"
								placeholder="0"
								value={otp4}
								onChange={(e) => { e.target.value.length > 1 ? e.target.value = e.target.value.slice(0, 1) : setOTP4(e.target.value) }}
							/>
						</Form.Group>
						<div className="d-flex justify-content-between align-items-center">
							<div className="text-muted small fw-medium">
								Pleas Check your Email
							</div>
							<div className="text-primary small fw-medium">
								<Timer email={email} />							</div>
						</div>
						<div className="my-2">
							<Button type="submit" variant="primary">
								Change Password
							</Button>
							<Button variant="secondary" onClick={handleClose} className="mx-2">
								Cancel
							</Button>
						</div>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default OTP;
