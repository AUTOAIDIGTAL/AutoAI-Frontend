"use client";

import { Button, Col, Row } from "react-bootstrap";

const WorkOrderDetails = () => {
  return (
    <div className="bg-white p-3 rounded-ai-md mb-3">
      <div className="divider-list">
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
	  {Array.from({length: 3}, (_, index) => (
		<div className="list-line-loop" key={index}>
			<Row className="d-flex justify-content-between align-items-center gy-3">
			<Col className="col-12 col-md-6 col-xl">
				<div className="small text-dark">Job Name</div>
				<div className="fs-6 text-muted">Oil Change</div>
			</Col>
			<Col className="col-12 col-md-6 col-xl">
				<div className="small text-dark">Job Cost</div>
				<div className="fs-6 text-primary">$99.00</div>
			</Col>
			<Col className="col-12 col-md-6 col-xl">
				<div className="small text-dark">Time</div>
				<div className="fs-6 text-muted">03 houres</div>
			</Col>
			<Col className="col-12 col-md-6 col-xl">
				<div className="small text-dark">Priority</div>
				<div className="fs-6 border py-1 px-2 rounded-2 bg-soft-danger-secondary d-inline-flex">
				High
				</div>
			</Col>
			<Col className="col-12 col-md-6 col-xl-auto">
				<div className="fs-6 text-dark">Parts Required</div>
				<div className="fs-6 text-muted">Parts Required</div>
			</Col>
			</Row>
		</div>
	  ))}
	  <div className="d-flex justify-content-between mt-3">
	  	<Button variant="danger-link fs-6" size="sm">Delete</Button>
		<div className="d-flex gap-2">
			<Button variant="outline-secondary fs-6" size="sm">Edit Details</Button>
			<Button variant="soft-primary fs-6" size="sm">View Details</Button>
		</div>
	  </div>
    </div>
  );
};

export default WorkOrderDetails;
