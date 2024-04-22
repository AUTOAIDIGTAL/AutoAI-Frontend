"use client";
import TableCM from "@/components/UI/TableCM";
import PaginationUi from "@/components/UI/Pagination";
import CreateModal from "./create-modal/modal";
import Link from "next/link";

const GarageManagement = () => {
    return (
        <>
            <div className="ai-box min-screen-layout mt-3 p-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="fs-3 fw-medium">Client management</div>
                    <CreateModal />
                </div>
                <div className="flex-1 pt-3">
                    <TableCM />
                    <PaginationUi />
                </div>
            </div>
        </>
    );
};

export default GarageManagement;
