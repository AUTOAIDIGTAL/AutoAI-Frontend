"use client";
import TableGMA from "@/components/UI/TableGMA";
import PaginationUi from "@/components/UI/Pagination";
import CreateModal from "./create-modal/modal";

const GarageManagemenrAdministration = () => {
	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Manage Administration</div>
					<CreateModal />
				</div>
				<div className="flex-1 pt-3">
					<TableGMA />
					<PaginationUi />
				</div>
			</div>
		</>
	);
};

export default GarageManagemenrAdministration;
