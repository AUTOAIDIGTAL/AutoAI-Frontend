"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const OTP = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary fw-medium" onClick={handleShow}>
        OTP
      </Button>

      <Modal size="sm" show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-2 d-flex gap-3"
              controlId="formBasicPassword"
            >
              <Form.Control
                className="text-center"
                type="text"
                placeholder="0"
              />
              <Form.Control
                className="text-center"
                type="text"
                placeholder="0"
              />
              <Form.Control
                className="text-center"
                type="text"
                placeholder="0"
              />
              <Form.Control
                className="text-center"
                type="text"
                placeholder="0"
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-muted small fw-medium">
                Pleas Check your Email
              </div>
              <div className="text-primary small fw-medium">
                00:00
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Change Password
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OTP;
