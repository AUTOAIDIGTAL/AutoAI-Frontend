"use client";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { apiService } from "@/services";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useRouter } from "next/navigation";

const OTP = ({ otpModal, password, email }) => {

	const [show, setShow] = useState(otpModal);
	const [otp, setOTP] = useState([]);
	const { user: currentUser, refetchUser } = useCurrentUser()
	const router = useRouter();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	// Assuming you have an API endpoint for changing the password
	const changePassword = async () => {
		const otpString = otp.join(""); // Convert otp array to a single string
		try {

			console.log("Password changed successfully", {
				otp: otpString,
				newPassword: password,
				email
			});
			const response = await apiService.post("/user/reset-password", {
				otp: otpString,
				newPassword: password,
				email
			});

			if (response && currentUser) {
				setShow(false);
				setOTP([]);
				console.log("Password changed successfully", currentUser._id);
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
			console.log(otp);
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
								value={otp[0]}
								onChange={(e) => { e.target.value.length > 1 ? e.target.value = e.target.value.slice(0, 1) : setOTP([...otp, e.target.value]) }}

							/>
							<Form.Control
								className="text-center"
								type="text"
								placeholder="0"
								value={otp[1]}
								onChange={(e) => { e.target.value.length > 1 ? e.target.value = e.target.value.slice(0, 1) : setOTP([...otp, e.target.value]) }}
							/>
							<Form.Control
								className="text-center"
								type="text"
								placeholder="0"
								value={otp[2]}
								onChange={(e) => { e.target.value.length > 1 ? e.target.value = e.target.value.slice(0, 1) : setOTP([...otp, e.target.value]) }}
							/>
							<Form.Control
								className="text-center"
								type="text"
								placeholder="0"
								value={otp[3]}
								onChange={(e) => { e.target.value.length > 1 ? e.target.value = e.target.value.slice(0, 1) : setOTP([...otp, e.target.value]) }}
							/>
						</Form.Group>
						<div className="d-flex justify-content-between align-items-center">
							<div className="text-muted small fw-medium">
								Pleas Check your Email
							</div>
							<div className="text-primary small fw-medium">
								00:00
							</div>
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
