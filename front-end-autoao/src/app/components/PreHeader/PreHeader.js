import { Nav } from "react-bootstrap";
import Image from "next/image";
import UserContent from "./UserContent/UserContent";
const PreHeader = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="fs-1 fw-bold">Profile</div>
      <UserContent/>
    </div>
  );
};

export default PreHeader;
