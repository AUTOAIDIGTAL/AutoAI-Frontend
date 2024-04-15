"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

const editProfile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary fw-medium" onClick={handleShow}>
        Edit Profile information
      </Button>

      <Modal size="md" show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Number</Form.Label>
                  <Form.Control type="number" placeholder="Number" />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Address" />
            </Form.Group>

            <div className="bg-gray-100 p-3 rounded-ai">
              <h6 className="mb-3">Address</h6>
            <Row>
              <Col  md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Street name</Form.Label>
                  <Form.Control type="text" placeholder="Street name" />
                </Form.Group>
              </Col>
              <Col  md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Locality</Form.Label>
                  <Form.Control type="number" placeholder="Locality" />
                </Form.Group>
              </Col>
              <Col  md={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>City/ Post Town</Form.Label>
                  <Form.Control type="text" placeholder="City/ Post Town" />
                </Form.Group>
              </Col>
              <Col  md={6}>
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
            Update Information
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default editProfile;
