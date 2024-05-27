"use client";
import { useState } from "react";
import { Button, Col, Form, Nav, Navbar, Row } from "react-bootstrap";
import Wizard from "../wizard/page";
import { Calendar } from "react-multi-date-picker";
import AssignGretchen from "../stepfour/(assign-modal)/assign-modal";

const WorkOrderCreation = () => {
  const [value, setValue] = useState(new Date());
  return (
    <>
      <div className="min-screen-layout mt-3 py-4">
        <div className="flex-1 pt-3">
          <Wizard />
          <div className="bg-white p-2 p-lg-4 rounded-ai-md shadow-sm">
            <div className="bg-gray-100 p-2 p-lg-2 rounded-ai-md mb-5">
              <div class="d-lg-flex align-content-center gap-3 auto-ai-navbar">
                <Navbar className="mb-3 mb-lg-0">
                  <Nav activeKey="/home" className="me-auto">
                    <Nav.Link href="/home">Brake Change</Nav.Link>
                    <Nav.Link href="#features">Cleaning</Nav.Link>
                    <Nav.Link href="#pricing">Oil Change</Nav.Link>
                  </Nav>
                </Navbar>
                <AssignGretchen />
              </div>
            </div>

            <Row>
              <Col md={8}>
                <div className="fs-4 fw-semibold mb-4">
                  Date and Time Selection
                </div>
                <Calendar
                  className="auto-ai-calendar"
                  value={value}
                  onChange={setValue}
                >
                  <div className="d-flex justify-content-center pt-4 gap-3">
                    <button
                      className="btn btn-soft-primary"
                      onClick={() => setValue(undefined)}
                    >
                      DESELECT
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => setValue(new Date())}
                    >
                      TODAY
                    </button>
                  </div>
                </Calendar>
              </Col>
              <Col md={4}>
                <div className="bg-gray-100 p-4 rounded-ai-md mb-5">
                  <div class="fs-6 fw-semibold mb-3">Select Time</div>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Start & End time</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Start & End time"
                      />
                    </Form.Group>
                  </Form>
                  <div class="fs-6 fw-semibold mb-3">Mechanics</div>
                  <div className="bg-white p-4 rounded-ai-md mb-3">
                    <div className="d-flex flex-wrap justify-content-between">
                      <div class="fs-6 text-muted">Mechanic Name</div>
                      <div class="small fw-semibold">Gretchen</div>
                    </div>
                    <div class="bg-gray-100 py-2 px-3 rounded-5 text-primary fs-6 d-inline-block fw-semibold mt-3">
                      Assign Mechanic
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-ai-md mb-3">
                    <div className="d-flex flex-wrap justify-content-between">
                      <div class="fs-6 text-muted">Mechanic Name</div>
                      <div class="small fw-semibold">Gretchen</div>
                    </div>
                    <div class="bg-gray-100 py-2 px-3 rounded-5 text-primary fs-6 d-inline-block fw-semibold mt-3">
                      Assign Mechanic
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-ai-md mb-3">
                    <div className="d-flex flex-wrap justify-content-between">
                      <div class="fs-6 text-muted">Mechanic Name</div>
                      <div class="small fw-semibold">Gretchen</div>
                    </div>
                    <div class="bg-gray-100 py-2 px-3 rounded-5 text-primary fs-6 d-inline-block fw-semibold mt-3">
                      Assign Mechanic
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="d-flex justify-content-between mt-3 gap-2">
              <Button variant="outline-secondary fs-6" size="sm">
                Cancel
              </Button>
              <div className="d-flex justify-content-between gap-2">
                <Button variant="outline-primary fs-6" size="sm">
                  Back
                </Button>
                <Button variant="primary fs-6" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkOrderCreation;
