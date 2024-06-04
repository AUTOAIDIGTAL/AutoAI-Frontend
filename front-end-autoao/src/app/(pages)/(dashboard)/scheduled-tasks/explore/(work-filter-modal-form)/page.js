import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const DropdownWithForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container position-relative d-inline-block">
      <button className="btn btn-rounded-white" onClick={toggleDropdown}>
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 10.5C6 10.2239 6.22386 10 6.5 10H9.5C9.77614 10 10 10.2239 10 10.5C10 10.7761 9.77614 11 9.5 11H6.5C6.22386 11 6 10.7761 6 10.5Z"
            fill="#1A202C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 7.5C4 7.22386 4.22386 7 4.5 7H11.5C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8H4.5C4.22386 8 4 7.77614 4 7.5Z"
            fill="#1A202C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2 4.5C2 4.22386 2.22386 4 2.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H2.5C2.22386 5 2 4.77614 2 4.5Z"
            fill="#1A202C"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="dropdown-menu show p-4 position-absolute custom-dropdown  end-0">
          <button
            className="btn-close position-absolute"
            onClick={closeDropdown}
          ></button>
          <div className="fs-5 fw-semibold text-dark mb-4">
            Filter Work Order
          </div>
          <Form>
            <Row>
              <Col xs="12" lg="6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Vehicle Registration</Form.Label>
                  <Form.Control
                    type="text"
                    className="pe-5"
                    placeholder="Vehicle Registration"
                  />
                </Form.Group>
              </Col>
              <Col xs="12" lg="6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Customer Name</Form.Label>
                  <Form.Control type="text" placeholder="Customer Name" />
                </Form.Group>
              </Col>
              <Col xs="12" lg="6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Mechanic Name</Form.Label>
                  <Form.Control type="text" placeholder="Customer" />
                </Form.Group>
              </Col>

              <Col xs="12" lg="6">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Parts Requires</Form.Label>
                  <div
                    className="bg-gray-100 gap-3 px-4 rounded-ai-md d-flex align-items-center text-muted border border-theme"
                    style={{ height: "45px" }}
                  >
                    <Form.Group className="m-0" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Yes" />
                    </Form.Group>
                    <Form.Group className="m-0" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="No" />
                    </Form.Group>
                  </div>
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary fs-6" size="sm">
              Filter Jobs
            </Button>
          </Form>
        </div>
      )}
    </div>
  );
};

export default DropdownWithForm;
