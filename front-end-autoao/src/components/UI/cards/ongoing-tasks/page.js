"use client";

import { Card, Stack } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const OngoingTasks = () => {
  return (
    <>
      <Card
        className="bg-gray-100 p-3 rounded-ai-md border-0 OngoingTasksCard shadow-shadow-2xl"
        style={{
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <div className="card-icon bg-primary-light-sec d-flex justify-content-center align-items-center text-primary">
              <FaChevronLeft />
            </div>
            <div className="lh-1">
              <div className="text-muted">Total jobs created</div>
              <div className="text-dark fs-3 fw-semibold pt-2">780</div>
            </div>
          </Stack>

          <div className="d-flex justify-content-between align-items-center pt-4">
            <div>Chart</div>
            <div className="d-flex gap-1"><div className="text-danger">-15%</div> This Month</div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default OngoingTasks;
