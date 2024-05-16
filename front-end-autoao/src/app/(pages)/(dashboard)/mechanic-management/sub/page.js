"use client";
import { Button, Col, Form, Row } from "react-bootstrap";

const MechanicInformation = () => {
  return (
    <>
      <div className="ai-box min-screen-layout mt-3 p-4 d-flex flex-column">
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-3 fw-medium">Edit Details</div>
        </div>
        <div className="flex-1 pt-3">
          <Form>
            <Row className="g-4">
              <Col xs={12} md={6} xl={3}>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} xl={3}>
                {" "}
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Position</Form.Label>
                  <Form.Control type="text" placeholder="Position" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} xl={3}>
                {" "}
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="text" placeholder="Phone Number" />
                </Form.Group>
              </Col>
              <Col xs={12} md={6} lg={3}>
                {" "}
                <Form.Group controlId="formGroupPassword">
                  <Form.Label>Emergency Contact Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Emergency Contact Number"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <hr className="text-muted my-5" />
          <div className="rounded-ai bg-gray-100 p-4">
            <div className="h6 mb-3">Address</div>
            <Form>
              <Row className="g-4">
                <Col xs={12} md={6} xl={3}>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Street name</Form.Label>
                    <Form.Control type="text" placeholder="Street name" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} xl={3}>
                  {" "}
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Locality</Form.Label>
                    <Form.Control type="text" placeholder="Locality" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} xl={3}>
                  {" "}
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>City/ Post Town</Form.Label>
                    <Form.Control type="text" placeholder="City/ Post Town" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6} xl={3}>
                  {" "}
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label>Post Code</Form.Label>
                    <Form.Control type="text" placeholder="Post Code" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
          <div className="h6 pt-4 mb-3">Work Schedule</div>
          <Form>
            <ul className="work-Schedule-wrap">
              {Array.from({ length: 5 }, (_, index) => (
                <li key={index}>
                  <Row className="g-4 align-items-center">
                    <Col className="col-12 col-xl-4 col-xxl">
                      <div className="h6 mb-3">Monday</div>
                      <Form.Group
                        className="text-muted"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Unavailable" />
                      </Form.Group>
                    </Col>
                    <Col className="col-12 col-xl col-xxl-auto">
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>Street name</Form.Label>
                        <Form.Control type="text" placeholder="Street name" />
                      </Form.Group>
                    </Col>
                    <Col className="col-12 col-xl col-xxl-auto">
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control type="text" placeholder="End Time" />
                      </Form.Group>
                    </Col>
                    <Col lg={"auto"} className="d-flex justify-content-end mt-xl-auto">
                      <Button variant="soft-primary rounded-pill p-3 d-flex">
                        <i className="icon-plus fs-4"></i>
                      </Button>
                    </Col>
                  </Row>
                </li>
              ))}
            </ul>
          </Form>
          <div className="rounded-ai bg-gray-100 p-4 mt-5">
            <div className="h6 mb-3">Additional Information</div>
            <Button variant="outline-primary w-100 d-flex justify-content-center align-items-center gap-2 py-3">
              <i class="icon-upload"></i>
              Upload Profile Image
            </Button>
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center top-white-shadow mt-5">
          <Button variant="outline-secondary">Cancel</Button>
          <div className="d-flex align-items-center gap-2">
            <Button variant="primary">Update Information</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MechanicInformation;
