export const rolesMap = {
	"SUPER_ADMIN": ['garage', 'manageAdmins',],
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
		image: "./../../assets/images/icons/dashboard.svg",
		title: "Dashboard",
		link: "/dashboard"
	},
	"workOrder": {
		image: "./../../assets/images/icons/instrument.svg",
		title: "Work Order",
		link: "/work-order"
	},
	"scheduledTasks": {
		image: "./../../assets/images/icons/list.svg",
		title: "Scheduled tasks",
		link: "/dashboard"
	},
	"userRolesManagement": {
		image: "./../../assets/images/icons/users.svg",
		title: "User Roles Management",
		link: "/dashboard"
	},
	"clientManagement": {
		image: "./../../assets/images/icons/help.svg",
		title: "Client management",
		link: "/client-management"
	},
	"vehicleManagement": {
		image: "./../../assets/images/icons/car.svg",
		title: "Vehicle management",
		link: "/vehicle-management"
	},
	"mechanicsManagement": {
		image: "./../../assets/images/icons/mechanic.svg",
		title: "Mechanics management",
		link: "/dashboard"
	},
	"jobs": {
		image: "./../../assets/images/icons/Jobs.svg",
		title: "Jobs",
		link: "/job-management"
	},

};