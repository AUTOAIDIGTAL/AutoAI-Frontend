import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";
const TableCM = () => {
  return (
    <>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Registration Plate</th>
            <th>Work Conducted</th>
          </tr>
        </thead>
        {[...Array(5).keys()].map((index) => (
          <tbody key={index}>
            <tr>
              <td width={"80%"}>Vehicle Reg</td>
              <td className="align-middle">
                <div className="d-flex align-items-center gap-2 h-100 fs-4">
                  <Badge bg="light" className="fw-normal rounded-ai text-dark">
                    Break Service
                  </Badge>
                  <Badge bg="light" className="fw-normal rounded-ai text-dark">
                    Break Service
                  </Badge>
                  <Badge bg="light" className="fw-normal rounded-ai text-dark">
                    Break Service
                  </Badge>
                  <Badge bg="light" className="fw-normal rounded-ai text-dark">
                    Break Service
                  </Badge>
                  <svg
                    className="ms-2"
                    width={17}
                    height={12}
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.5 6C16.5 6 13.5 0.5 8.5 0.5C3.5 0.5 0.5 6 0.5 6C0.5 6 3.5 11.5 8.5 11.5C13.5 11.5 16.5 6 16.5 6ZM1.6727 6C1.72963 6.08679 1.79454 6.18323 1.86727 6.28758C2.20216 6.76807 2.69631 7.4071 3.33211 8.04289C4.62103 9.33182 6.38062 10.5 8.5 10.5C10.6194 10.5 12.379 9.33182 13.6679 8.04289C14.3037 7.4071 14.7978 6.76807 15.1327 6.28758C15.2055 6.18323 15.2704 6.08679 15.3273 6C15.2704 5.91321 15.2055 5.81677 15.1327 5.71242C14.7978 5.23193 14.3037 4.5929 13.6679 3.95711C12.379 2.66818 10.6194 1.5 8.5 1.5C6.38062 1.5 4.62103 2.66818 3.33211 3.95711C2.69631 4.5929 2.20216 5.23193 1.86727 5.71242C1.79454 5.81677 1.72963 5.91321 1.6727 6Z"
                      fill="#718096"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.5 3.5C7.11929 3.5 6 4.61929 6 6C6 7.38071 7.11929 8.5 8.5 8.5C9.88071 8.5 11 7.38071 11 6C11 4.61929 9.88071 3.5 8.5 3.5ZM5 6C5 4.067 6.567 2.5 8.5 2.5C10.433 2.5 12 4.067 12 6C12 7.933 10.433 9.5 8.5 9.5C6.567 9.5 5 7.933 5 6Z"
                      fill="#718096"
                    />
                  </svg>
                </div>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
};

export default TableCM;
