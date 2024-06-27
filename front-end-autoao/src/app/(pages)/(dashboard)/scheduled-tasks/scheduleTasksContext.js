// ScheduledTaskContext.js
import React, { createContext, useState } from 'react';

const ScheduledTaskContext = createContext({
	workOrders: [],
	setWorkOrders: () => { }
});

const ScheduledTaskProvider = ({ children }) => {
	const [workOrders, setWorkOrders] = useState([]);

	return (
		<ScheduledTaskContext.Provider value={{ workOrders, setWorkOrders }}>
			{children}
		</ScheduledTaskContext.Provider>
	);
};

export { ScheduledTaskContext, ScheduledTaskProvider };
