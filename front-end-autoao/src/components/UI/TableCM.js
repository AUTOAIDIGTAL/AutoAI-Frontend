import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";
const TableCM = () => {
  return (
    <>
      <Table hover responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Number</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Company</th>
                  <th>Company Name</th>
                  <th>Vehicle/s Reg</th> 
                  <th>Vehicle/s owned</th> 
                </tr>
              </thead>
              {[...Array(10).keys()].map((index) => (
                <tbody key={index}>
                  <tr>
                    <td className="fw-semibold text-dark">Name Here</td>
                    <td>Garage Name</td>
                    <td>Email</td>
                    <td>Address Here</td>
                    <td>Company Name</td>
                    <td>Vehicle/s Reg</td>
                    <td>Vehicle/s owned</td>
                  </tr>
                </tbody>
              ))}
            </Table>
    </>
  );
};

export default TableCM;
