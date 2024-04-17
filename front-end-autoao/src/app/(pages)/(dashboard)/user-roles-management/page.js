"use client";
import PreHeader from "@/components/pre-header/pre-header";
import NavBar from "@/components/side-nav-bar/side-navbar";
import PaginationUi from "@/components/UI/Pagination";
import TableUi from "@/components/UI/Table";
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
