"use client";
import PreHeader from "@/app/components/PreHeader/PreHeader";
import NavBar from "../../../components/SideNavBar/NavBar";
import PaginationUi from "./../../../components/UI/Pagination";
import TableUi from "./../../../components/UI/Table";
import AddNewUser from "./addNewUser/addNewUser";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <PreHeader />
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
      </div>
    </>
  );
};

export default Profile;
