"use client";
import TableVM from "@/components/UI/TableVM";
import PaginationUi from "@/components/UI/Pagination";
import CreateModal from "./create-modal/modal";

const GarageManagemenr = () => {
	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Vehicle management</div>
					<CreateModal />
				</div>
				<div className="flex-1 pt-3">
					<TableVM />
					<PaginationUi />
				</div>
			</div>
		</>
	);
};

export default GarageManagemenr;
