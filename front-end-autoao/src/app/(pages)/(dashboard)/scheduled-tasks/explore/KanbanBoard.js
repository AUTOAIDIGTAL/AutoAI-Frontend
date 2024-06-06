import React, { useState } from "react";
import ViewDropdown from "./ViewDropdown";
import KanbanGridView from "./(kanban-board)/KanbanGridView";
import KanbanListView from "./(kanban-board)/KanbanListView";
import KanbanCalendarView from "./(kanban-board)/KanbanCalendarView";

const KanbanBoard = () => {
  const [currentView, setCurrentView] = useState('grid'); // grid, list, or calendar

  const handleSelect = (eventKey) => {
    setCurrentView(eventKey);
  };

  return (
    <>
      <ViewDropdown currentView={currentView} handleSelect={handleSelect} />
      <div className={`kanban-board ${currentView}-view`}>
        {currentView === 'calendar' ? (
          <KanbanCalendarView />
        ) : currentView === 'list' ? (
          <KanbanListView />
        ) : (
          <KanbanGridView />
        )}
      </div>
    </>
  );
};

export default KanbanBoard;