import Cookies from "js-cookie";

export function getAuthorizationHeader() {
	let currentUser = Cookies.get("currentUser")

	if (currentUser) currentUser = JSON.parse(currentUser)

	return {
		Authorization: `Bearer ${currentUser?.data?.accessToken}`,
	};
}
