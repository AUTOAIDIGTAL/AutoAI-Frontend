"use client";
import { Button, Col, Form, Row } from "react-bootstrap";
import Wizard from "../wizard/page";

const WorkOrderCreation = () => {
  return (
    <>
      <div className="min-screen-layout mt-3 py-4">
        <div className="flex-1 pt-3">
          <Wizard />
          <Form className="bg-white p-4 rounded-ai-md shadow-sm">
            <div className="fs-4 fw-semibold mb-3">Vehicle Details</div>
            <Row>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Registration Plate</Form.Label>
                  <Form.Control type="text" placeholder="Registration Plate" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Make of car</Form.Label>
                  <Form.Control type="text" placeholder="Make of car" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Model</Form.Label>
                  <Form.Control type="text" placeholder="Model" />
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="soft-primary fs-6 d-inline-flex align-items-center"
              size="sm"
            >
              <i className="icon-plus fs-5 me-1"></i> Add new vehicle
            </Button>
            <hr className="my-4" />
            <div className="fs-4 fw-semibold mb-3">Customer Details</div>
            <Row>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Customer Name / Company Name</Form.Label>
                  <div className="position-relative">
                    <span className="position-absolute top-50 end-15 translate-middle">
                      <span span className="icon-search"></span>
                    </span>
                    <Form.Control
                      type="text"
                      className="pe-5"
                      placeholder="Customer Name / Company Name"
                    />
                  </div>
                </Form.Group>
              </Col>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Number</Form.Label>
                  <Form.Control type="text" placeholder="Number" />
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="soft-primary fs-6 d-inline-flex align-items-center"
              size="sm"
            >
              <i className="icon-plus fs-5 me-1"></i> Add new customer
            </Button>

            <div className="d-flex justify-content-between mt-3 gap-2">
              <Button variant="outline-secondary fs-6" size="sm">
                Cancel
              </Button>
              <Button variant="primary fs-6" size="sm">
                Next
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default WorkOrderCreation;
