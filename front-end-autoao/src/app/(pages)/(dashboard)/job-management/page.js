"use client";
import TableJOB from "@/components/UI/TableJOB";
import PaginationUi from "@/components/UI/Pagination";
import CreateModal from "./create-modal/modal";
import { useEffect, useState } from "react";
import { constants } from "../garage-management/constant";
import { apiService } from "@/services";

const JobManagement = () => {

	const [jobsList, setJobsList] = useState(null);

	useEffect(() => {
		const getJobs = async () => {
			try {
				const data = await apiService.get(constants.jobs)
				console.log('data', data);
				setJobsList(data)
			} catch (error) {
				console.log(error);
			}
		};
		getJobs();
	}, []);

	const handleJobAdded = (newJobData) => {
		setJobsList([...jobsList, newJobData]);
	};
	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Jobs List</div>
					<CreateModal onJobAdded={handleJobAdded} />
				</div>
				<div className="flex-1 pt-3">
					{jobsList && <TableJOB jobsList={jobsList} />}
					{/* <PaginationUi /> */}
				</div>
			</div>
		</>
	);
};

export default JobManagement;
