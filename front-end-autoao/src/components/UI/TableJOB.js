import { constants } from "@/app/(pages)/(dashboard)/garage-management/constant";
import EditModal from "@/app/(pages)/(dashboard)/job-management/(update-modal)/modal";
import { apiService } from "@/services";
import { Pagination } from "react-bootstrap";
import { Badge, Dropdown, Table } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
const TableDM = ({ jobsList, handleRefetch }) => {
  const deleteItem = async (e, id) => {
    e.preventDefault();
    await apiService.delete(`${constants.jobs}/${id}`);
    handleRefetch();
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.
    </Tooltip>
  );

  return (
    <>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Job Name</th>
            <th>Time</th>
            <th>Description</th>
            <th>Cost</th>
            <th></th>
          </tr>
        </thead>
        {jobsList &&
          jobsList?.map((item, index) => (
            <tbody key={index}>
              <tr>
                <td>{item?.name}</td>
                <td>
                  <Badge bg="light" className="fw-normal rounded-ai">
                    {item?.time}
                  </Badge>
                </td>
                <td>
                  <div className="d-inline-flex align-items-center gap-2 list-group-horizontal">
					{item?.description}{" "}
					<OverlayTrigger
						placement="top"
						delay={{ show: 250, hide: 400 }}
						overlay={renderTooltip}
					>
						<i className="icon-eye fs-5" style={{cursor:'pointer'}}></i>
					</OverlayTrigger>
				  </div>
                </td>
                <td className="text-primary fw-semibold">£ {item?.cost}</td>
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
                      {/* <Dropdown.Item> */}
                      <EditModal jobId={item._id} onJobEdited={handleRefetch} />
                      {/* </Dropdown.Item> */}
                      <Dropdown.Item onClick={(e) => deleteItem(e, item._id)}>
                        <i className="icon-trash-2 text-danger"></i> Delete
                      </Dropdown.Item>
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

export default TableDM;
