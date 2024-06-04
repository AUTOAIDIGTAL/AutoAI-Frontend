import React, { useState } from "react";
import { Card, Offcanvas } from "react-bootstrap";
import WorkRequiredModal from "./(work-required-modal)/page";
import MultipleAvatars from "@/components/avatar/multiple-avatars";
import Comments from "@/components/UI/comments/comments";

const ParentComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <KanbanCard handleShow={handleShow} />
      <WorkOrderModal show={show} handleClose={handleClose} />
    </>
  );
};

const KanbanCard = ({ handleShow }) => {
  return (
    <Card className="border-0 rounded-ai-md task-card" onClick={handleShow}>
      <Card.Body className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-between align-items-center lh-1 pb-1">
          <div className="fs-6 fw-semibold text-truncate pe-3">AA00 AAA</div>
          <div className="small fw-medium d-flex align-items-center gap-2 rounded-5 bg-gray-100 py-1 px-2">
            <div className="text-dark">ID</div>
            <div className="text-muted">824793</div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center border-bottom lh-1 pb-2">
          <div className="small text-truncate pe-3">Customer Name</div>
          <div className="fs-6 text-muted">Jamie Jenkins</div>
        </div>
        <div className="d-flex justify-content-between align-items-center border-bottom lh-1 pb-2">
          <MultipleAvatars />
          <div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
            09:00 PM l 24-12-2024
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center border-bottom lh-1 pb-2">
          <div className="small text-truncate pe-3">Parts Required</div>
          <div className="fs-6 text-dark rounded-5 bg-gray-100 py-1 px-2">
            Yes
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center lh-1">
          <div className="small text-truncate pe-3">Total Job</div>
          <div className="fs-6 fw-medium d-flex align-items-center gap-1 rounded-5 bg-gray-100 py-1 px-2">
            <div className="text-primary">12</div>
            <div className="text-primary">/</div>
            <div className="text-muted">18</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

const WorkOrderModal = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      backdrop="static"
      placement="end"
      className="custom-offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Job Details</Offcanvas.Title>
        <WorkRequiredModal />
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="divider-list mb-4">
          <div className="divider-list-wrap bg-gray-100 p-3 rounded-ai-md border-0">
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Vehicle Number</div>
                <div className="fs-6 text-dark fw-semibold">Details Here</div>
              </div>
            </div>
            <div className="divider-list-wrap-auto">
              <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
            </div>
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Customer Name</div>
                <div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
                  Customer Name
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-list mb-3">
          <div className="divider-list-wrap border-0">
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Job Name</div>
                <div className="fs-6 text-dark fw-semibold">Job Name</div>
              </div>
            </div>
            <div className="divider-list-wrap-auto">
              <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
            </div>
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark text-truncate">Job Cost</div>
                <div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
                  Job Cost
                </div>
              </div>
            </div>
            <div className="divider-list-wrap-auto">
              <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
            </div>
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Time Consumed</div>
                <div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
                  65 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="fs-6 text-dark">Priority</div>
          <div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
            High
          </div>
        </div>
        <div className="bg-gray-100 p-3 rounded-ai-md border-0 mb-4">
          <div className="fs-5 fw-semibold mb-4">Parts Required</div>
          <div className="divider-list mb-3">
            <div className="divider-list-wrap">
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Vehicle Number</div>
                  <div className="fs-6 text-dark fw-semibold">Details Here</div>
                </div>
              </div>
              <div className="divider-list-wrap-auto">
                <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
              </div>
              <div className="divider-list-wrap-flex">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="fs-6 text-dark">Customer Name</div>
                  <div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
                    Customer Name
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fs-6 text-dark mb-4">Comments</div>
          <Comments />
        </div>
        <div className="divider-list mb-3">
          <div className="divider-list-wrap border-0">
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="fs-6 text-dark">Assigned Mechanic</div>
                <div className="fs-6 text-dark fw-semibold">
                  Miss Sadie Kerluke
                </div>
                <div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
                  In Progress
                </div>
              </div>
            </div>
            <div className="divider-list-wrap-auto">
              <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
            </div>
            <div className="divider-list-wrap-auto">
              <div className="d-flex justify-content-between align-items-center gap-3">
                <div className="fs-6 text-dark">Date & Time</div>
                <div className="fs-6 text-dark fw-semibold">
                  11-04-2024 - 10:00PM
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-list mb-3">
          <div className="divider-list-wrap border-0">
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Job Name</div>
                <div className="fs-6 text-dark fw-semibold">Job Name</div>
              </div>
            </div>
            <div className="divider-list-wrap-auto">
              <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
            </div>
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark text-truncate">Job Cost</div>
                <div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
                  Job Cost
                </div>
              </div>
            </div>
            <div className="divider-list-wrap-auto">
              <div className="vr mx-3 d-none d-md-flex col-auto px-0" />
            </div>
            <div className="divider-list-wrap-flex">
              <div className="d-flex justify-content-between align-items-center">
                <div className="fs-6 text-dark">Time Consumed</div>
                <div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
                  65 minutes
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="fs-6 text-dark">Priority</div>
          <div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
            High
          </div>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ParentComponent;
