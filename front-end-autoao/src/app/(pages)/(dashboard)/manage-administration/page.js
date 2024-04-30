"use client";
import TableGMA from "@/components/UI/TableGMA";
import PaginationUi from "@/components/UI/Pagination";
import CreateModal from "./create-modal/modal";
import { useEffect, useState } from "react";
import { constants } from "../garage-management/constant";
import { apiService } from "@/services";

const GarageManagementAdministration = () => {

	const [adminList, setAdminList] = useState(null);

	useEffect(() => {
		const getGarages = async () => {
			try {
				const data = await apiService.get(constants.getUsers)
				setAdminList(data)
			} catch (error) {
				console.log(error);
			}
		};
		getGarages();
	}, []);

	const handleAdminAdded = (newAdminData) => {
		setAdminList([...adminList, newAdminData]);
	};
	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Manage Administration</div>
					<CreateModal onAdminAdded={handleAdminAdded} />
				</div>
				<div className="flex-1 pt-3">
					{adminList && <TableGMA adminList={adminList} />}
					{/* <PaginationUi /> */}
				</div>
			</div>
		</>
	);
};

export default GarageManagementAdministration;
