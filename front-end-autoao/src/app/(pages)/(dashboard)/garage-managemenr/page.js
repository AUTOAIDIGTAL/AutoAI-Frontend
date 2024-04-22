"use client";
import TableDM from "@/components/UI/TableDM";
import PaginationUi from "@/components/UI/Pagination";
import CreateGarage from "./create-garage/create-garage";

const GarageManagemenr = () => {
	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Garage Management</div>
					<CreateGarage />
				</div>
				<div className="flex-1 pt-3">
					<TableDM />
					<PaginationUi />
				</div>
			</div>
		</>
	);
};

export default GarageManagemenr;
