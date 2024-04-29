"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const CreateGarage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary fw-medium" onClick={handleShow}>
        <svg
		className="me-1"
          width={17}
          height={16}
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.25 4C8.52614 4 8.75 4.22386 8.75 4.5V7.5H11.75C12.0261 7.5 12.25 7.72386 12.25 8C12.25 8.27614 12.0261 8.5 11.75 8.5H8.75V11.5C8.75 11.7761 8.52614 12 8.25 12C7.97386 12 7.75 11.7761 7.75 11.5V8.5H4.75C4.47386 8.5 4.25 8.27614 4.25 8C4.25 7.72386 4.47386 7.5 4.75 7.5H7.75V4.5C7.75 4.22386 7.97386 4 8.25 4Z"
            fill="black"
          />
        </svg>
        Add Admin
      </Button>

      <Modal size="md" show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Add Garage Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="row-cols-1 row-cols-lg-2">
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="text" placeholder="Email Address" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" placeholder="Password" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="text" placeholder="Contact Number" />
                </Form.Group>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between align-items-center">
              <Col>
                <Form.Label className="my-2">Role</Form.Label>
              </Col>
              <Col className="col-auto">
                <div className="bg-gray-100 gap-4 py-3 px-4 rounded-ai d-flex justify-content-between align-items-center">
                  <Form.Group className="m-0" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Admin" />
                  </Form.Group>
                </div>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add Owner
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateGarage;
