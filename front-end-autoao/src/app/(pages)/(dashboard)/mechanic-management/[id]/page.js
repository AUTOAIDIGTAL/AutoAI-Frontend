import MechanicInformationDetails from "@/components/UI/mechanic-information";
import { Button, Col, Row } from "react-bootstrap";

const MechanicInformation = () => {
  return (
    <>
      <div className="ai-box min-screen-layout mt-3 p-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-3 fw-medium">Mechanic Information</div>
        </div>
        <div className="flex-1 pt-3">
          <MechanicInformationDetails />
          <Row className="g-4">
            <Col lg={6}>
              <div className="rounded-5 p-4 bg-gray-100">
                <div className="fs-5 fw-medium pt-1 pb-3">Availability</div>
                <div className="schedule-poppver bg-white rounded-5 py-2 px-4">
                  <ul>
                    {Array.from({ length: 5 }, (_, index) => (
                      <li key={index}>
                        <Row className="g-2">
                          <Col sm={6}>
                            <div className="small text-dark">Day</div>
                            <div className="text-dark fw-medium">Monday</div>
                          </Col>
                          <Col sm={6}>
                            <div className="small text-dark">Time slot</div>
                            <div className="text-muted">
                              <i className="icon-clock text-primary"></i> 10:00
                              AM - 12:00 AM
                            </div>
                          </Col>
                        </Row>
                      </li>
                    ))}
                    <li>
                      <Row className="align-items-center">
                        <Col sm={6} className="schedule-poppver-left">
                          <div className="small text-dark">Day</div>
                          <div className="text-dark fw-medium">Monday</div>
                        </Col>
                        <Col sm={6} className="text-end">
                          <div className="d-inline-block py-2 px-3 rounded-2 border bg-soft-danger">
                            Closed
                          </div>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="rounded-5 p-4 bg-gray-100">
                <div className="fs-5 fw-medium pt-1 pb-3">Work Schedule </div>
                <div className="schedule-poppver bg-white rounded-5 py-2 px-4">
                  <ul>
                    {Array.from({ length: 5 }, (_, index) => (
                      <li key={index}>
                        <Row className="g-2">
                          <Col sm={6}>
                            <div className="small text-dark">Day</div>
                            <div className="text-dark fw-medium">Monday</div>
                          </Col>
                          <Col sm={6}>
                            <div className="small text-dark">Time slot</div>
                            <div className="text-muted">
                              <i className="icon-clock text-primary"></i> 10:00
                              AM - 12:00 AM
                            </div>
                          </Col>
                        </Row>
                      </li>
                    ))}
                    <li>
                      <Row className="align-items-center">
                        <Col sm={6} className="schedule-poppver-left">
                          <div className="small text-dark">Day</div>
                          <div className="text-dark fw-medium">Monday</div>
                        </Col>
                        <Col sm={6} className="text-end">
                          <div className="d-inline-block py-2 px-3 rounded-2 border bg-soft-danger">
                            Closed
                          </div>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="d-flex justify-content-between align-items-center top-white-shadow mt-2">
          <Button variant="outline-secondary">Go Back</Button>
          <div className="d-flex align-items-center gap-2">
            <Button variant="outline-danger">Delete</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MechanicInformation;
