import React from "react";
import KanbanCard from "../KanbanCard";

const KambanGridView = () => {
  return (
    <>
      <div className="kanban-box-container d-flex flex-column gap-3">
        <div className="fs-5 fw-semibold mb-1">Booked</div>
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
      </div>
      <div className="kanban-box-container d-flex flex-column gap-3">
        <div className="fs-5 fw-semibold mb-1">On Hold</div>
        <KanbanCard />
      </div>
      <div className="kanban-box-container d-flex flex-column gap-3">
        <div className="fs-5 fw-semibold mb-1">In Workshop</div>
        <KanbanCard />
        <KanbanCard />
      </div>
      <div className="kanban-box-container d-flex flex-column gap-3">
        <div className="fs-5 fw-semibold mb-1">Awaiting Collection</div>
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
        <KanbanCard />
      </div>
    </>
  );
};

export default KambanGridView;
