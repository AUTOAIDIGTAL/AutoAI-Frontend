import AvatarTitle from '@/components/avatar/avatar-title';
import React from 'react';
import CommentInput from './CommentInput';

const Comments = ({ job, refetchJob }) => {

	console.log('JOB HERE', job)
	return (
		<>
			{job?.userComments?.map((comment, index) => (
				< div className="bg-white p-3 rounded-ai-md mb-3" key={index} >
					<div className='d-flex justify-content-md-between'>
						<AvatarTitle />
						<div className="d-flex justify-content-between align-items-center gap-3">
							<div className="fs-6 text-dark">Date & Time</div>
							<div className="fs-6 text-dark fw-semibold">{new Date(comment.createdDate).toLocaleDateString()} - {new Date(comment.createdDate).toLocaleTimeString()}</div>
						</div>
					</div>
					<p className="small mt-3 mb-0">{comment.text}</p>
				</div >
			))}
			<CommentInput jobId={job._id} workOrderId={job.workorderId} onJobAdded={refetchJob} />
		</>
	);
};

export default Comments;
