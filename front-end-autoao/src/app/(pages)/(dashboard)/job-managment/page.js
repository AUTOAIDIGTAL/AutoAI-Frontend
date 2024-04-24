"use client";
import TableJOB from "@/components/UI/TableJOB";
import PaginationUi from "@/components/UI/Pagination";
import CreateModal from "./create-modal/modal";

const GarageManagemenr = () => {
	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Jobs List</div>
					<CreateModal />
				</div>
				<div className="flex-1 pt-3">
					<TableJOB />
					<PaginationUi />
				</div>
			</div>
		</>
	);
};

export default GarageManagemenr;
