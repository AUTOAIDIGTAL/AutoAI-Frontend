"use client";

import { useContext, useEffect } from "react";
import KanbanBoard from "./explore/KanbanBoard";
import KanbanHead from "./explore/kanban-head/page";
import { ScheduledTaskProvider } from "./scheduleTasksContext";

const ScheduledTasks = () => {

	return (
		<>
			<div className="min-screen-layout mt-3 p-4">
				<KanbanHead />
				<ScheduledTaskProvider>
					<KanbanBoard />
				</ScheduledTaskProvider>
			</div>
		</>
	);
};

export default ScheduledTasks;
