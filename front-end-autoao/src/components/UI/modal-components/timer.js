import { apiService } from '@/services';
import React, { useState, useEffect } from 'react';

const Timer = ({ email }) => {
	// Initialize the timer to 5 minutes (300 seconds)
	const [time, setTime] = useState(300);
	const [timerExpired, setTimerExpired] = useState(false);
	let intervalId;

	// Function to decrement the timer each second
	const tick = () => {
		setTime((prevTime) => {
			if (prevTime - 1 <= 0) {
				clearInterval(intervalId);
				setTimerExpired(true);
				return 0; // Stop the timer at 0
			}
			return prevTime - 1;
		});
	};

	// Use useEffect to set up the interval and clean up
	useEffect(() => {
		// Set up the interval
		intervalId = setInterval(tick, 1000);

		// Clean up the interval when the component unmounts
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	// Function to format the time into MM:SS format
	const formatTime = (seconds) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = seconds % 60;
		return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
	};

	// Handler for the button click event
	const handleButtonClick = async () => {
		const response = await apiService.post("/user/forgot-password", {
			email
		});

		if (response) {
			setTimerExpired(false);
			setTime(300);
			intervalId = setInterval(tick, 1000);
		}
	};

	return (
		<div className="text-primary small fw-medium">
			{timerExpired ? (
				<p onClick={handleButtonClick} style={{ cursor: 'pointer' }}>
					Resend OTP
				</p>
			) : (
				formatTime(time)
			)}
		</div>
	);
};

export default Timer;
