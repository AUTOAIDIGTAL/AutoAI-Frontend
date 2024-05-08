"use client";
import TableVM from "@/components/UI/TableVM";
import PaginationUi from "@/components/UI/Pagination";
import { useEffect, useState } from "react";
import { apiService } from "@/services";
import { constants } from "../garage-management/constant";
import VehicleModal from "./create-modal/modal";

const VehicleManagement = () => {

	const [vehicleList, setVehicleList] = useState(null);
	const [refetch, setRefetch] = useState(false);

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
	}, [refetch]);

	const handleRefetch = () => {
		setRefetch(!refetch)
	};

	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Vehicle management</div>
					<VehicleModal onVehicleAdded={handleRefetch} />
				</div>
				<div className="flex-1 pt-3">
					{vehicleList && <TableVM vehicleList={vehicleList} handleRefetch={handleRefetch} />}
					{/* <PaginationUi /> */}
				</div>
			</div>
		</>
	);
};

export default VehicleManagement;
