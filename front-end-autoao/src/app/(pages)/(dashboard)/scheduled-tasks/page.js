"use client";

import KanbanBoard from "./explore/KanbanBoard";
import KanbanHead from "./explore/kanban-head/page";

const ScheduledTasks = () => {
	return (
		<>
			<div className="min-screen-layout mt-3 p-4">
				<KanbanHead />
				<KanbanBoard />
			</div>
		</>
	);
};

export default ScheduledTasks;
