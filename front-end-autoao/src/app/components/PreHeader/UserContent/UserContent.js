import { Nav, Dropdown } from "react-bootstrap";
import DropdownUser from "./DropdownUser";
const UserContent = () => {
  return (
    <div className="header-user-control">
          <Nav>
            <div className="vr"></div>
            <DropdownUser/>
          </Nav>
    </div>
  );
};

export default UserContent;
