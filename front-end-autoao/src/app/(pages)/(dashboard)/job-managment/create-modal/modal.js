"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

const CreateModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="btn btn-primary fw-medium" onClick={handleShow}>
        Create Job
      </Button>

      <Modal size="md" show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Create New Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Name</Form.Label>
              <Form.Control type="text" placeholder="Job Name" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Job Cost</Form.Label>
                  <Form.Control type="text" placeholder="Job Cost" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Time In Minutes</Form.Label>
                  <Form.Control type="text" placeholder="Time In Minutes" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create Job
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateModal;
