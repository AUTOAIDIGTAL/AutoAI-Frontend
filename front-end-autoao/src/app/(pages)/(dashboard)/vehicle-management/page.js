"use client";
import TableVM from "@/components/UI/TableVM";
import PaginationUi from "@/components/UI/Pagination";
import CreateModal from "./create-modal/modal";
import { useEffect, useState } from "react";
import { apiService } from "@/services";
import { constants } from "../garage-management/constant";

const GarageManagement = () => {

	const [vehicleList, setVehicleList] = useState(null);

	useEffect(() => {
		const getVehicles = async () => {
			try {
				const data = await apiService.get(constants.vehicle)
				setVehicleList(data)
			} catch (error) {
				console.log(error);
			}
		};
		getVehicles();
	}, []);

	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Vehicle management</div>
					<CreateModal />
				</div>
				<div className="flex-1 pt-3">
					{vehicleList && <TableVM vehicleList={vehicleList} />}
					{/* <PaginationUi /> */}
				</div>
			</div>
		</>
	);
};

export default GarageManagement;
