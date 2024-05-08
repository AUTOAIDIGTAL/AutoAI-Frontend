export const rolesMap = {
	"SUPER_ADMIN": ['manageAdmins', 'garage'],
	"ADMIN": ['dashboard', 'scheduledTasks', 'userRolesManagement', 'clientManagement', 'vehicleManagement', 'mechanicsManagement', 'jobs', 'workOrder'],
	"MECHANIC": ['workOrder',],
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
		title: "Scheduled tasks",
		link: "/dashboard"
	},
	"userRolesManagement": {
		icon: "icon-users",
		title: "User Roles Management",
		link: "/user-roles-management"
	},
	"clientManagement": {
		icon: "icon-help",
		title: "Client management",
		link: "/client-management"
	},
	"vehicleManagement": {
		icon: "icon-car",
		title: "Vehicle management",
		link: "/vehicle-management"
	},
	"mechanicsManagement": {
		icon: "icon-mechanic",
		title: "Mechanics management",
		link: "/dashboard"
	},
	"jobs": {
		icon: "icon-jobs",
		title: "Jobs",
		link: "/job-management"
	},

};