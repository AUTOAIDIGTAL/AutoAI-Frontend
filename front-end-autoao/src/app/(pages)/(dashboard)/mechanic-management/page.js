"use client";
import TableMM from "@/components/UI/TableMM";
import PaginationUi from "@/components/UI/Pagination";
import { constants } from "../garage-management/constant";
import { apiService } from "@/services";
import { useEffect, useState } from "react";

const MechanicManagement = () => {

	const [mechanicList, setMechanicList] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		const getMechanics = async () => {
			try {
				const data = await apiService.get(constants.mechanic)
				console.log(data)
				setMechanicList(data)
			} catch (error) {
				console.log(error);
			}
		};
		getMechanics();
	}, [refetch]);

	const handleRefetch = () => {
		setRefetch(!refetch)
	};

	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Mechanic Management</div>
				</div>
				<div className="flex-1 pt-3">
					{mechanicList && <TableMM mechanicList={mechanicList} handleRefetch={handleRefetch} />}
					{/* <PaginationUi /> */}
				</div>
			</div>
		</>
	);
};

export default MechanicManagement;
