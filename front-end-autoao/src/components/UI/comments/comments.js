import AvatarTitle from '@/components/avatar/avatar-title';
import React from 'react';
import CommentInput from './CommentInput';

const Comments = () => {
	return (
		<>
			<div className="bg-white p-3 rounded-ai-md mb-3">
				<div className='d-flex justify-content-md-between'>
					<AvatarTitle/>
					<div className="d-flex justify-content-between align-items-center gap-3">
						<div className="fs-6 text-dark">Date & Time</div>
						<div className="fs-6 text-dark fw-semibold">11-04-2024 - 10:00PM</div>
					</div>
				</div>
				<p className="small mt-3 mb-0">Sunt tenetur est sit ea facere possimus consequatur necessitatibus. Autem illum perspiciatis consequatur est non. Sunt eveniet rerum. Quae culpa cupiditate est eius adipisci magni.</p>
			</div>
			<CommentInput/>
		</>
	);
};

export default Comments;
