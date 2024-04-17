import { Nav, Dropdown } from "react-bootstrap";
import DropdownUser from "./dropdown-user";
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
