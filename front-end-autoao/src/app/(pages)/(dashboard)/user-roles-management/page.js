"use client";
import TableUi from "@/components/UI/Table";
import PaginationUi from "@/components/UI/Pagination";
import AddNewUser from "./add-new-user/add-new-user";
import { apiService } from "@/services";
import { constants } from "../garage-management/constant";
import { useEffect, useState } from "react";

const Profile = () => {

	const [users, setUsers] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		const getUsers = async () => {
			try {
				const data = await apiService.get(constants.createAdmin)
				console.log('data', data);
				setUsers(data)
			} catch (error) {
				console.log(error);
			}
		};
		getUsers();
	}, [refetch]);


	const handleRefetch = () => {
		setRefetch(!refetch)
	};

	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">User</div>
					<AddNewUser onUserAdded={handleRefetch} />
				</div>
				<div className="flex-1 pt-3">
					{users && <TableUi handleRefetch={handleRefetch} users={users} />}
					{/* <PaginationUi /> */}
				</div>
			</div>
		</>
	);
};

export default Profile;
