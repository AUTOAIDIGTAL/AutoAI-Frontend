"use client";
import PreHeader from "@/app/components/PreHeader/PreHeader";
import NavBar from "../../../components/SideNavBar/NavBar";
import React from "react";

const Profile = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <PreHeader />
      </div>
    </>
  );
};

export default Profile;
