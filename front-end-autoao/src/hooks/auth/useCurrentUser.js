
// useCurrentUser Hook (assuming in separate file - adjust path if necessary)
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { authService } from "../../services";
export const useCurrentUser = () => {
	const [user, setUser] = useState();

	useEffect(() => {
		const currentUser = Cookies.get("currentUser");
		if (currentUser) {
			try {
				const user = JSON.parse(currentUser);
				setUser(user?.data);
			} catch (error) {
				console.error("Error parsing user data from cookie:", error);
			}
		}
	}, []);

	const refetchUser = async (userId) => {
		const userInfo = await authService.getMe(userId);
		const currentUser = Cookies.get("currentUser");

		if (userInfo && currentUser) {
			const newUser = { accessToken: currentUser.accessToken, ...userInfo }
			Cookies.set("currentUser", JSON.stringify(newUser));
			setUser(userInfo);
		}
	};

	return { user, refetchUser };
};
