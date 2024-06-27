export const rolesMap = {
	"SUPER_ADMIN": ['manageAdmins', 'garage'],
	"ADMIN": ['adminDashboard', 'scheduledTasks', 'userRolesManagement', 'clientManagement', 'vehicleManagement', 'mechanicsManagement', 'jobs', 'workOrder'],
	"MANAGER": ['adminDashboard', 'scheduledTasks', 'userRolesManagement', 'clientManagement', 'vehicleManagement', 'mechanicsManagement', 'jobs', 'workOrder'],
	"MECHANIC": ['mechanicDashboard'],
	"CLIENT": ['dashboard'],
};

export const linksMap = {
	"garage": {
		image: "./../../assets/images/icons/Garage.svg",
		title: "Garage",
		link: "/garage-management"
	},
	"manageAdmins": {
		image: "./../../assets/images/icons/Employees.svg",
		title: "Manage Admin",
		link: "/manage-administration"
	},
	"dashboard": {
		icon: "icon-layout",
		title: "Dashboard",
		link: "/dashboard"
	},
	"workOrder": {
		icon: "icon-instrument",
		title: "Work Order",
		link: "/work-order"
	},
	"scheduledTasks": {
		icon: "icon-list",
		title: "Scheduled Tasks",
		link: "/scheduled-tasks"
	},
	"userRolesManagement": {
		icon: "icon-users",
		title: "User Roles Management",
		link: "/user-roles-management"
	},
	"clientManagement": {
		icon: "icon-help",
		title: "Client Management",
		link: "/client-management"
	},
	"vehicleManagement": {
		icon: "icon-car",
		title: "Vehicle Management",
		link: "/vehicle-management"
	},
	"mechanicsManagement": {
		icon: "icon-mechanic",
		title: "Mechanics Management",
		link: "/mechanic-management"
	},
	"jobs": {
		icon: "icon-jobs",
		title: "Jobs",
		link: "/job-management"
	},
	"adminDashboard": {
		icon: "icon-layout",
		title: "Dashboard",
		link: "/admin-dashboard"
	},
	"mechanicDashboard": {
		icon: "icon-layout",
		title: "Dashboard",
		link: "/mechanic-dashboard"
	},

};