"use client";
import TableUi from "@/components/UI/Table";
import PaginationUi from "@/components/UI/Pagination";
import AddNewUser from "./add-new-user/add-new-user";

const Profile = () => {
	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">User</div>
					<AddNewUser />
				</div>
				<div className="flex-1 pt-3">
					<TableUi />
					<PaginationUi />
				</div>
			</div>
		</>
	);
};

export default Profile;
