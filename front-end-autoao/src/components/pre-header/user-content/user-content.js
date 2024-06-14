import { Nav, Dropdown } from "react-bootstrap";
import DropdownUser from "./dropdown-user";
import NotificationDropdown from "./notifections-dropdown";
import SearchBarModal from "./search-modal";
const UserContent = () => {
  return (
    <div className="header-user-control">
      <Nav>
        <SearchBarModal />
        <NotificationDropdown />
        <div className="vr my-2"></div>
        <DropdownUser />
      </Nav>
    </div>
  );
};

export default UserContent;
