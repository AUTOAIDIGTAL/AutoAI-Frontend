import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button, Modal } from "react-bootstrap";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";

const UserForm = ({ user, onUserAdded, onUserUpdated }) => {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState(user ? user.firstName : "");
  const [lastName, setLastName] = useState(user ? user.lastName : "");
  const [phoneNumber, setPhoneNumber] = useState(user ? user.phoneNumber : "");
  const [email, setEmail] = useState(user ? user.email : "");

  // Separate state variables for each role
  const [isMechanic, setIsMechanic] = useState(
    user ? user.roles.includes("MECHANIC") : false
  );
  const [isManager, setIsManager] = useState(
    user ? user.roles.includes("MANAGER") : false
  );

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (user) {
      // Set initial values for edit mode
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhoneNumber(user.phoneNumber);
      setEmail(user.email);
      setIsMechanic(user.roles.includes("MECHANIC"));
      setIsManager(user.roles.includes("MANAGER"));
    }
  }, [user]);

  // useEffect(() => {
  // 	// magrr:', isManager);
  // 	// mech:', isMechanic);
  // }, [isMechanic, isManager])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("phoneNumber", phoneNumber);
    formData.append("email", email);

    // Combine separate state variables into an array of roles
    const roles = [];
    if (isMechanic) roles.push("MECHANIC");
    if (isManager) roles.push("MANAGER");

    // Add roles to form data
    roles.forEach((role) => formData.append("roles", role));

    let response;
    if (user) {
      // Edit mode: update the existing user
      response = await apiService.put(
        `${constants.createAdmin}/${user._id}`,
        formData
      );
      if (response) {
        // User updated successfully:', response);
        setShow(false);
        onUserUpdated();
      }
    } else {
      // Add mode: create a new user
      response = await apiService.post(constants.createAdmin, formData);
      if (response) {
        // User added successfully:', response);
        setShow(false);
        onUserAdded();
      }
    }

    // Reset form fields and close modal
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setIsMechanic(false);
    setIsManager(false);
  };

  const onRoleSelection = (isMechanic, isManager) => {
    setIsManager(!isManager);
    setIsMechanic(!isMechanic);
    // mech:', isMechanic);
    // magrr:', isManager);
  };

  return (
    <>
      <div onClick={handleShow}>{user ? "Edit User" : "Add New User"}</div>

      <Modal size="md" show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>{user ? "Edit User" : "Add New User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formPhoneNumber">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label className="my-2">Roles</Form.Label>
              </Col>
              <Col className="col-auto">
                <div className="bg-gray-100 gap-4 py-3 px-4 rounded-ai d-flex justify-content-between align-items-center">
                  <Form.Group className="m-0 d-flex align-items-center gap-3" controlId="formRoleMechanic">
                    <div onClick={() => setIsMechanic(!isMechanic)}>
                      <Form.Check
                        type="checkbox"
                        label="Mechanic"
                        checked={isMechanic}
                        disabled
                      />
                    </div>
                    <div onClick={() => setIsManager(!isManager)}>
                      <Form.Check
                        type="checkbox"
                        label="Manager"
                        checked={isManager}
                        disabled
                      />
                    </div>
                  </Form.Group>
                </div>
              </Col>
            </Row>
            <div className="d-flex align-items-center gap-1">
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                {user ? "Update" : "Add"}
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
};

export default UserForm;
