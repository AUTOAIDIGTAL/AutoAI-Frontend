import { Nav } from "react-bootstrap";
import Link from 'next/link'
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="sideBarNav">
      <div>
        <Image
          className="mb-2 d-block d-lg-inline-block mx-auto"
          src="./../../assets/images/brand/logo.svg"
          alt="logo"
          width={120}
          height={57}
          priority
        />
      </div>
      <Nav defaultActiveKey="/home" className="flex-column gap-4">
        <Nav.Link href="/home">
        <Image
          className=""
          src="./../../assets/images/icons/dashboard.svg"
          alt="dasboard"
          width={15}
          height={15}
          priority
        />
          Dashboard
        </Nav.Link>
        <Nav.Link eventKey="link-1">
        <Image
          className=""
          src="./../../assets/images/icons/list.svg"
          alt="Scheduled tasks"
          width={15}
          height={15}
          priority
        />
          Scheduled tasks</Nav.Link>
        <Nav.Link eventKey="link-2">
        <Image
          className=""
          src="./../../assets/images/icons/users.svg"
          alt="User Roles Management"
          width={15}
          height={15}
          priority
        />
          User Roles Management</Nav.Link>
        <Nav.Link eventKey="link-2">
        <Image
          className=""
          src="./../../assets/images/icons/help.svg"
          alt="User Roles Management"
          width={15}
          height={15}
          priority
        />
          Client management</Nav.Link>
        <Nav.Link eventKey="link-2">
        <Image
          className=""
          src="./../../assets/images/icons/car.svg"
          alt="User Roles Management"
          width={15}
          height={15}
          priority
        />
          Vehicle management</Nav.Link>
        <Nav.Link eventKey="link-2">
        <Image
          className=""
          src="./../../assets/images/icons/mechanic.svg"
          alt="User Roles Management"
          width={15}
          height={15}
          priority
        />
          Mechanics management</Nav.Link>
        <Nav.Link eventKey="link-2">
        <Image
          className=""
          src="./../../assets/images/icons/Jobs.svg"
          alt="Jobs"
          width={15}
          height={15}
          priority
        />
          Jobs</Nav.Link>
        <Nav.Link eventKey="link-2">
        <Image
          className=""
          src="./../../assets/images/icons/instrument.svg"
          alt="Work order"
          width={15}
          height={15}
          priority
        />
          Work order</Nav.Link>
      </Nav>
      <div className="side-nav-bottom">
        <Link className="" href="#">
          
        <Image
          className=""
          src="./../../assets/images/icons/logout.svg"
          alt="Work order"
          width={15}
          height={15}
          priority
        />
          Logout</Link>
      </div>
    </div>
  );
};

export default NavBar;
