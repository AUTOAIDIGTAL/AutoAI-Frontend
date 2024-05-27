"use client";
import { Button, Col, Form, Row } from "react-bootstrap";
import Wizard from "../wizard/page";
import WorkOrderCreation from "./work-order-creation/page";

const StepFour = () => {
  return (
    <>
      <div className="min-screen-layout mt-3 py-4">
        <div className="flex-1 pt-3">
          <Wizard />
          <div className="bg-white p-4 rounded-ai-md shadow-sm">
            <div class="fs-4 fw-semibold mb-3">Review Work Order Details</div>
            <WorkOrderCreation />
            <WorkOrderCreation />
            <hr />
            <div className="d-flex justify-content-between mt-3">
              <Button variant="danger-link fs-6" size="sm">
                Cancel
              </Button>
              <div className="d-flex gap-2">
                <Button variant="outline-primary fs-6" size="sm">
                  Back
                </Button>
                <Button variant="primary fs-6" size="sm">
                  Confirm Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StepFour;
