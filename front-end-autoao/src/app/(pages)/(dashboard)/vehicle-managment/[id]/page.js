"use client";
import VehicleManagmentList from "@/components/UI/vehicle-managment-list";
import ServiceHistory from "@/components/service-history/service-history";
import { Button } from "react-bootstrap";

const ClientInformation = () => {
  return (
    <>
      <div className="ai-box min-screen-layout mt-3 p-4 d-flex flex-column">
        <div className="flex-1 mb-4  overflow-auto">
          <VehicleManagmentList />
          <div className="bg-gray-100 p-3 rounded-ai p-5 border-0 my-4">
            <div className="fs-5 fw-medium mb-4">Service History</div>
            <ServiceHistory />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center top-white-shadow">
          <Button variant="outline-secondary" className="py-2">
            Go Back
          </Button>
          <div className="d-flex align-items-center gap-2">
            <Button variant="outline-primary" className="py-2">
              Edit
            </Button>
            <Button variant="outline-danger" className="py-2">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientInformation;
