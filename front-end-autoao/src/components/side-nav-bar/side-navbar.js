"use client";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className="sideBarNav">
      <div className="menu-brand-wrap">
        <Image
          className="mb-2 d-block d-lg-inline-block mx-auto toggle-brand-hide"
          src="./../../assets/images/brand/logo.svg"
          alt="logo"
          width={120}
          height={57}
          priority
        />
		<Image
          className="toggle-brand"
          src="./../../assets/images/brand/logo-icon.svg"
          alt="logo"
          width={30}
          height={40}
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
          <div className="menu-text-wrap">Dashboard</div>
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
          <div className="menu-text-wrap">Scheduled tasks</div>
        </Nav.Link>
        <Nav.Link href="/user-roles-management">
          <Image
            className=""
            src="./../../assets/images/icons/users.svg"
            alt="User Roles Management"
            width={15}
            height={15}
            priority
          />
          <div className="menu-text-wrap"> User Roles Management</div>
        </Nav.Link>
        <Nav.Link eventKey="#">
          <Image
            className=""
            src="./../../assets/images/icons/help.svg"
            alt="User Roles Management"
            width={15}
            height={15}
            priority
          />
          <div className="menu-text-wrap">Client management</div>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <Image
            className=""
            src="./../../assets/images/icons/car.svg"
            alt="User Roles Management"
            width={15}
            height={15}
            priority
          />
          <div className="menu-text-wrap">Vehicle management</div>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <Image
            className=""
            src="./../../assets/images/icons/mechanic.svg"
            alt="User Roles Management"
            width={15}
            height={15}
            priority
          />
          <div className="menu-text-wrap"> Mechanics management</div>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <Image
            className=""
            src="./../../assets/images/icons/Jobs.svg"
            alt="Jobs"
            width={15}
            height={15}
            priority
          />
          <div className="menu-text-wrap">Jobs</div>
        </Nav.Link>
        <Nav.Link eventKey="link-2">
          <Image
            className=""
            src="./../../assets/images/icons/instrument.svg"
            alt="Work order"
            width={15}
            height={15}
            priority
          />
          <div className="menu-text-wrap">Work order</div>
        </Nav.Link>
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
          <div className="menu-text-wrap">Logout</div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
