import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AssignGretchen() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Assign to Gretchen
      </Button>

      <Modal size="md" show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Assign to Gretchen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="bg-gray-100 p-4 rounded-ai-md mb-4">
              <div class="fs-6 fw-semibold mb-3">Job Details</div>
              <Row className="mb-3">
                <Col>
                  <div class="small text-dark col-8">Job Name</div>
                </Col>
                <Col className="col-4">
                  <div class="small text-dark text-center px-4">Time</div>
                </Col>
              </Row>

              <Row className="border-bottom pb-2 mb-2">
                <Col>
                  <div class="small text-dark col-8">Break Service</div>
                </Col>
                <Col className="col-4">
                  <div class="small text-primary text-center px-4">16 Min</div>
                </Col>
              </Row>
            </div>

            <Row className="mb-3">
              <Col sm={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Job Start Time</Form.Label>
                  <Form.Control type="text" placeholder="Job Start Time" />
                </Form.Group>
              </Col>
              <Col sm={6}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Job End Time</Form.Label>
                  <Form.Control type="text" placeholder="Job End Time" />
                </Form.Group>
              </Col>
            </Row>

            <div className="bg-gray-100 p-4 rounded-ai-md">
              <div class="fs-6 fw-semibold mb-3">Jobs Assigned</div>
              <Row className="mb-3">
                <Col>
                  <div class="small text-dark col-8">Job Name</div>
                </Col>
                <Col className="col-4">
                  <div class="small text-dark text-center px-4">
                    Job Durataion
                  </div>
                </Col>
              </Row>
              {Array.from({ length: 3 }, (_, index) => (
                <Row key={index} className="border-bottom pb-2 mb-2">
                  <Col>
                    <div class="small text-dark col-8">Break Service</div>
                  </Col>
                  <Col className="col-4">
                    <div class="small text-primary text-center px-4">
                      12:00AM - 01:00
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
            <div className="d-flex gap-2">
              <Button variant="primary" onClick={handleClose}>
                Create Job
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AssignGretchen;
