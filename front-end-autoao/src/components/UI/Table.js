import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";
const TableUi = () => {
  return (
    <>
      <Table hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phones Number</th>
                  <th>Roles</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              {[...Array(10).keys()].map((index) => (
                <tbody key={index}>
                  <tr>
                    <td>Full Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                    <td className="align-middle" colSpan={3}>
                      <div className="d-flex align-items-center gap-2 h-100">
                        <Badge bg="light" className="fw-normal rounded-ai">
                          Manager
                        </Badge>
                        <Badge bg="light" className="fw-normal rounded-ai">
                          Mechanic
                        </Badge>
                      </div>
                    </td>
                    <td className="align-middle text-end">
                      <Dropdown>
                        <Dropdown.Toggle variant="blank-icon" className="btn-remove-arrow" id="dropdown-basic">
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
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
    </>
  );
};

export default TableUi;