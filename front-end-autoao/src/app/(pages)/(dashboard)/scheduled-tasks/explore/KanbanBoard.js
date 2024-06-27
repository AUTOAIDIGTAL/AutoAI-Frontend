import React, { useContext, useEffect, useState } from "react";
import ViewDropdown from "./ViewDropdown";
import KanbanGridView from "./(kanban-board)/KanbanGridView";
import KanbanListView from "./(kanban-board)/KanbanListView";
import KanbanCalendarView from "./(kanban-board)/KanbanCalendarView";
import { ScheduledTaskContext } from "../scheduleTasksContext";
import { apiService } from "@/services";
import { constants } from "../../garage-management/constant";

const KanbanBoard = () => {

	const { setWorkOrders } = useContext(ScheduledTaskContext);
	const [currentView, setCurrentView] = useState('grid'); // grid, list, or calendar


	useEffect(() => {
		const fetchWorkOrders = async () => {
			try {
				const response = await apiService.get(constants.workOrder);
				setWorkOrders(response);
			} catch (error) {
				console.error(error);
			}
		}
		fetchWorkOrders()
	}, [])

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