import React from 'react';

const MultipleAvatars = ({ mechanics }) => {
	const avatars = [
		'https://randomuser.me/api/portraits/men/1.jpg',
		'https://randomuser.me/api/portraits/women/2.jpg',
		'https://randomuser.me/api/portraits/men/3.jpg',
		'https://randomuser.me/api/portraits/women/4.jpg'
	];

	return (
		<div className="d-flex align-items-center">
			{avatars.slice(0, 3).map((avatar, index) => (
				<div key={index} className="avatar-wrapper">
					<img src={avatar} alt={`Avatar ${index + 1}`} className="avatar rounded-circle" />
				</div>
			))}
			<div className="avatar-wrapper">
				<div className="avatar rounded-circle more-avatars">+1</div>
			</div>
		</div>
	);
};

export default MultipleAvatars;
