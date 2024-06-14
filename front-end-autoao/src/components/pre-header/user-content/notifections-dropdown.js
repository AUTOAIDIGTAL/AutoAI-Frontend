import React, { useState } from "react";
import { Dropdown, ListGroup, Button } from "react-bootstrap";

const notifications = [
  {
    heading: "Work Order Created",
    time: "3 days ago",
    content:
      "Hi ( Mechanic name ), a new job ( Job Name ) has been assigned to you",
    smallPrint: "2024-03-09 / 10:00PM",
  },
  {
    heading: "Job Status Changed",
    content: "Some placeholder content in a paragraph.",
    smallPrint: "2024-03-09 / 10:00PM",
  },
  {
    heading: "Comment Added",
    content: "Hi ( Workshop Manager/Admin/mechanic name ), a new comment is added on work order ( AAA-000 ).",
    smallPrint: "2024-03-09 / 10:00PM",
  },
  {
    heading: "Job Status Changed",
    content: "Some placeholder content in a paragraph.",
    smallPrint: "2024-03-09 / 10:00PM",
  },
  {
    heading: "Comment Added",
    content: "Hi ( Workshop Manager/Admin/mechanic name ), a new comment is added on work order ( AAA-000 ).",
    smallPrint: "2024-03-09 / 10:00PM",
  },
];

const NotificationDropdown = () => {
  const [show, setShow] = useState(false);

  const handleToggle = (isOpen) => {
    setShow(isOpen);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <Dropdown className="notification-menu" show={show} onToggle={handleToggle}>
      <Dropdown.Toggle variant="navbar-icon" id="dropdown-basic">
        <i className="icon-bell"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Header className="d-flex justify-content-between align-items-center">
          <strong className="text-dark fw-semibold">Notifications</strong>
          <Button
            variant="link"
            className="p-0 btn-close"
            aria-label="Close"
            onClick={handleClose}
          >
          </Button>
        </Dropdown.Header>
        <ListGroup>
          {notifications.map((notification, index) => (
            <ListGroup.Item key={index}>
              <div className="fs-6 fw-semibold mb-1">
                {notification.heading}
              </div>
              <p className="small text-muted mb-1">
                {notification.content.length > 90
                  ? `${notification.content.substring(0, 90)}...`
                  : notification.content}
              </p>
              <small className="text-body-secondary">
                {notification.smallPrint}
              </small>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default NotificationDropdown;
