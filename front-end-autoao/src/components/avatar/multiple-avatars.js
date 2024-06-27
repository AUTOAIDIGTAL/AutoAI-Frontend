import React, { useState } from 'react';
import Image from 'next/image';

const MechanicsAvatars = ({ mechanics }) => {
	const [imgError, setImgError] = useState({});

	const handleError = (index) => {
		setImgError((prev) => ({
			...prev,
			[index]: true,
		}));
	};

	return (
		<div className="d-flex align-items-center">
			{mechanics.slice(0, 3).map((mechanic, index) => (
				<div key={index} className="avatar-wrapper">
					<Image
						alt='Mechanic'
						src={
							imgError[index] || !mechanic.profileImg
								? '/userprofile.png'
								: `https://autoai.s3.amazonaws.com/${mechanic.profileImg}`
						}
						width={50}
						height={50}
						className="avatar rounded-circle"
						onError={() => handleError(index)}
					/>
				</div>
			))}
			{mechanics.length > 3 && (
				<div className="avatar-wrapper">
					<div className="avatar rounded-circle more-avatars">
						+{mechanics.length - 3}
					</div>
				</div>
			)}
		</div>
	);
};

export default MechanicsAvatars;
