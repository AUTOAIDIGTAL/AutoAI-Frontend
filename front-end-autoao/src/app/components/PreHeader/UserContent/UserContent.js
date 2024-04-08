import { Nav, Dropdown } from "react-bootstrap";
import Avatar from "./../../avatar/avatar";
import Image from "next/image";
const UserContent = () => {
  return (
    <div className="header-user-control">

          {/* <Nav>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <Avatar/>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav> */}
    </div>
  );
};

export default UserContent;
