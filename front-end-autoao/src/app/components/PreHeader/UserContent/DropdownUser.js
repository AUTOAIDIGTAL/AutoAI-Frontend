import { Nav, Dropdown } from "react-bootstrap";
import Avatar from "./../../avatar/avatar";
import Image from "next/image";
const DropdownUser = () => {
  return (
    <div className="auto-ai-user-avatar-name">
      <Dropdown>
        <Dropdown.Toggle
          variant="avatar-dropdown"
          className="border-0"
          id="dropdown-basic"
        >
          <div className="d-inline-flex align-items-center gap-2">
            <Avatar />
            <span className="pro-user-name">Umair Ali</span>
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownUser;
