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
            <div className="fs-4 fw-semibold mb-3">Work Required</div>
            <Row>
              <Col xs="12" lg="3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Job Name</Form.Label>
                  <Form.Control type="text" placeholder="Job Name" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Job Cost</Form.Label>
                  <Form.Control type="text" placeholder="Job Cost" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Time</Form.Label>
                  <Form.Control type="text" placeholder="Time" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Priority</Form.Label>
                  <div className="bg-gray-100 gap-3 px-4 rounded-4 d-flex justify-content-between align-items-center text-muted " style={{ height: '45px'}}>
                    <Form.Group className="m-0" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="High" />
                    </Form.Group>
                    <Form.Group className="m-0" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Medium" />
                    </Form.Group>
                    <Form.Group className="m-0" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Low" />
                    </Form.Group>
                  </div>
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Comment</Form.Label>
                  <Form.Control type="text" placeholder="Comment" />
                </Form.Group>
              </Col>
              <Form.Group className="m-3 text-muted ms-0" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Parts required" />
                    </Form.Group>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Part Name</Form.Label>
                  <Form.Control type="text" placeholder="Part Name" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Cost</Form.Label>
                  <Form.Control type="text" placeholder="Cost" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="4">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Comment</Form.Label>
                  <Form.Control type="text" placeholder="Comment" />
                </Form.Group>
              </Col>
            </Row>
            <Button
              variant="soft-primary fs-6 d-inline-flex align-items-center"
              size="sm"
            >
              <i className="icon-plus fs-5 me-1"></i> Add new Part
            </Button>

            <div className="d-flex justify-content-between mt-3 gap-2">
              <Button variant="outline-secondary fs-6" size="sm">
                Cancel
              </Button>
              <div className="d-flex justify-content-between gap-2">
                <Button
                  variant="soft-primary fs-6 d-inline-flex align-items-center"
                  size="sm"
                >
                  <i className="icon-plus fs-5 me-1"></i> Add new Job
                </Button>
                <Button variant="outline-primary fs-6" size="sm">
                  Back
                </Button>
                <Button variant="primary fs-6" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default WorkOrderCreation;
