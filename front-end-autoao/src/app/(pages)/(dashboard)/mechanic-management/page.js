"use client";
import TableMM from "@/components/UI/TableMM";
import PaginationUi from "@/components/UI/Pagination";

const MechanicManagement = () => {

	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Mechanic Management</div>
				</div>
				<div className="flex-1 pt-3">
					<TableMM/>
					{/* <PaginationUi /> */}
				</div>
			</div>
		</>
	);
};

export default MechanicManagement;
