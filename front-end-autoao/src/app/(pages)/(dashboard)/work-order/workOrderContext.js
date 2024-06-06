// WorkOrderContext.js
import React, { createContext, useState } from 'react';

const WorkOrderContext = createContext({
	formStage: '1',
	setFormStage: () => { },
	workOrder: null,
	setWorkOrder: () => { }
});

const WorkOrderProvider = ({ children }) => {
	const [formStage, setFormStage] = useState('1');
	const [workOrder, setWorkOrder] = useState(null);

	return (
		<WorkOrderContext.Provider value={{ formStage, setFormStage, workOrder, setWorkOrder }}>
			{children}
		</WorkOrderContext.Provider>
	);
};

export { WorkOrderContext, WorkOrderProvider };
