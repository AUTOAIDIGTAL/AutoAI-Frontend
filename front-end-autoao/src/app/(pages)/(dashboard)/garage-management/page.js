"use client";
import TableDM from "@/components/UI/TableDM";
import PaginationUi from "@/components/UI/Pagination";
import CreateGarage from "./create-garage/create-garage";
import { useEffect, useState } from "react";
import { constants } from "./constant";
import { apiService } from "@/services";

const GarageManagement = () => {

	const [garageList, setGarageList] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		const getGarages = async () => {
			try {
				const data = await apiService.get(constants.getGarage)
				setGarageList(data)
			} catch (error) {
				console.log(error);
			}
		};
		getGarages();
	}, [refetch]);

	const handleRefetch = () => {
		setRefetch(!refetch);
	};


	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Garage Management</div>
					<CreateGarage onGarageAdded={handleRefetch} />
				</div>
				<div className="flex-1 pt-3">
					{garageList && <TableDM data={garageList} />}
					{/* {<PaginationUi />} */}
				</div>
			</div>
		</>
	);
};

export default GarageManagement;
