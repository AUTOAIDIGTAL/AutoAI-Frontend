import {
  Tooltip,
  OverlayTrigger,
  Row,
  Col,
  Badge,
  Dropdown,
  Table,
  Popover,
  Button,
} from "react-bootstrap";
const TableMM = () => {
  const popover = (
    <Popover style={{ width: "auto", minWidth: "350px", maxWidth: "350px" }}>
      <Popover.Body className="py-1 px-3">
        <div className="schedule-poppver">
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
                      <i className="icon-clock text-primary"></i> 10:00 AM -
                      12:00 AM
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
      </Popover.Body>
    </Popover>
  );
  const popoverSkill = (
    <Popover id="popover-skills" style={{ width: "auto", minWidth: "250px", maxWidth: "550px" }}>
      <Popover.Body>
        <div className="h6">Add Skills</div>
        <div className="d-flex flex-wrap align-items-center gap-2">
          <Badge bg="light" className="fw-normal rounded-ai fs-base-13">
            Tyre Replacement
          </Badge>
          <Badge bg="light" className="fw-normal rounded-ai fs-base-13">
            Tyre Replacement
          </Badge>
          <Badge bg="light" className="fw-normal rounded-ai fs-base-13">
            Tyre Replacement
          </Badge>
          <Badge bg="light" className="fw-normal rounded-ai fs-base-13">
            Tyre Replacement
          </Badge>
          <Badge bg="light" className="fw-normal rounded-ai fs-base-13">
            Tyre Replacement
          </Badge>
        </div>
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Mechanic</th>
            <th>Postion</th>
            <th>Schedule</th>
            <th>Emergency Contact</th>
            <th>Skills</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }, (_, index) => (
            <tr key={index}>
              <td>Mechanic Name</td>
              <td>Postion</td>
              <td>
                <OverlayTrigger
                  placement="auto-start"
                  overlay={popover}
                >
                  <div className="d-inline-block py-2 px-3 rounded-2 bg-soft-primary">
                    Schedule
                  </div>
                </OverlayTrigger>
              </td>
              <td>000-000-000</td>
              <td className="align-middle">
                <div className="d-flex align-items-center gap-2">
                  <Badge bg="light" className="fw-normal rounded-ai py-2 fs-base-13">
                    Tyre Replacement
                  </Badge>
                  <Badge bg="light" className="fw-normal rounded-ai py-2 fs-base-13">
                    Brake pads
                  </Badge>
                  <Badge bg="light" className="fw-normal rounded-ai py-2 fs-base-13">
                    Cleaning
                  </Badge>

                  <OverlayTrigger
                    placement="auto-start"
                    overlay={popoverSkill}
                  >
                      <i className="icon-eye"></i>
                  </OverlayTrigger>
                </div>
              </td>
              <td className="align-middle text-end" colSpan={2}>
                <Dropdown className="position-static">
                  <Dropdown.Toggle
                    variant="blank-icon"
                    className="btn-remove-arrow"
                    id="dropdown-basic"
                  >
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      className="bi bi-three-dots-vertical"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="d-flex align-items-center gap-1">
                      <i className="icon-pencil"></i>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item className="d-flex align-items-center gap-1">
                      <i className="icon-trash-2"></i>
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableMM;
