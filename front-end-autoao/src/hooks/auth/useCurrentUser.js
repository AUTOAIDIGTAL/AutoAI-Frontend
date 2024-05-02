
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
				setUser(user);
			} catch (error) {
				console.error("Error parsing user data from cookie:", error);
			}
		}
	}, []);


	const refetchUser = async (userId) => {
		try {
			const userInfo = await authService.getMe(userId);

			let currentUserCookie = Cookies.get("currentUser");

			if (currentUserCookie) {
				let currentUser;
				try {
					currentUser = JSON.parse(currentUserCookie);
				} catch (error) {
					console.error('Error parsing currentUser JSON:', error);
					return;
				}

				// REFETCH ERRROR ', currentUser);

				if (userInfo?.data && currentUser?.accessToken) {
					const newUser = { accessToken: currentUser?.accessToken, ...userInfo.data };

					Cookies.set("currentUser", JSON.stringify(newUser));

					setUser(newUser);
				}
			}
		} catch (error) {
			console.error('Error fetching user information:', error);
		}
	};

	return { user, refetchUser };
};
