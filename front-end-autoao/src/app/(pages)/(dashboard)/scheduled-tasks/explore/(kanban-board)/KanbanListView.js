import React from "react";
import ScheduledTasksTable from "@/components/UI/table/ScheduledTasksTable";
const KanbanListView = () => {
  return (
    <>
      <div className="bg-white p-4 rounded-ai-md shadow-sm">
        <ScheduledTasksTable />
      </div>
    </>
  );
};

export default KanbanListView;
