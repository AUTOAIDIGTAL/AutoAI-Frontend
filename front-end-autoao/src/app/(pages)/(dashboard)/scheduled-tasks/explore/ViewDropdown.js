import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ViewDropdown = ({ currentView, handleSelect }) => {
  const getTitle = () => {
    switch (currentView) {
      case 'grid':
        return <div className="d-flex align-items-center gap-2"><i className="icon-board"></i> Grid View</div>;
      case 'list':
        return <div className="d-flex align-items-center gap-2"><i className="icon-list-1"></i> List View</div>;
      case 'calendar':
        return <div className="d-flex align-items-center gap-2"><i className="icon-calendar"></i> Calendar View</div>;
      default:
        return <div className="d-flex align-items-center gap-2"><i className="icon-board"></i> Grid View</div>;
    }
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={getTitle()}
      onSelect={handleSelect}
      variant='board-select'
      className="mb-3"
    >
      {currentView !== 'grid' && (
        <Dropdown.Item eventKey="grid">
          <i className="icon-board pe-1 small"></i> Grid View
        </Dropdown.Item>
      )}
      {currentView !== 'list' && (
        <Dropdown.Item eventKey="list">
          <i className="icon-list-1 pe-1 small"></i> List View
        </Dropdown.Item>
      )}
      {currentView !== 'calendar' && (
        <Dropdown.Item eventKey="calendar">
          <i className="icon-calendar pe-1 small"></i> Calendar View
        </Dropdown.Item>
      )}
    </DropdownButton>
  );
};

export default ViewDropdown;
