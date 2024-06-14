import React from "react";
import { Card, Button, Dropdown, Stack } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft } from "react-icons/fa";
import AvatarTitle from "@/components/avatar/avatar-title";

const MechanicsJobsCompleted = () => {
  return (
    <Card className="bg-white p-4 rounded-ai-md border-0 shadow-shadow-2xl w-100">
      <Card.Header className="border-0 bg-transparent h5 mb-3 mx-0 px-0">
        Mechanics Jobs Completed
      </Card.Header>
      <Card.Body className="p-0">
      {Array.from({ length: 4 }).map((_, index) => (
        <Stack
          direction="horizontal"
          gap={3}
          className="justify-content-between mb-3 list-top-border"
          key={index}
        >
          <AvatarTitle index={index} />
          <div className="d-flex align-items-center gap-3 lh-1">
            <div className="text-muted small">Job Done</div>
            <div className="text-dark fs-4 fw-semibold">121</div>
          </div>
        </Stack>
      ))}
      </Card.Body>
    </Card>
  );
};

export default MechanicsJobsCompleted;
