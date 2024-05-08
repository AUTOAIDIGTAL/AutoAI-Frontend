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
        Create New Garage
      </Button>

      <Modal size="md" show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Garage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Add Admin</Form.Label>
              <Form.Control type="text" placeholder="Search Admin Here" />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Garage Name</Form.Label>
                  <Form.Control type="text" placeholder="Garage Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact Number</Form.Label>
                  <Form.Control type="text" placeholder="Contact Number" />
                </Form.Group>
              </Col>
            </Row>

            <div className="bg-gray-100 p-3 rounded-ai">
              <h6 className="mb-3">Address</h6>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Street name</Form.Label>
                    <Form.Control type="text" placeholder="Street name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Locality</Form.Label>
                    <Form.Control type="number" placeholder="Locality" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>City/ Post Town</Form.Label>
                    <Form.Control type="text" placeholder="City/ Post Town" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control type="number" placeholder="Post Code" />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Create Garage
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

