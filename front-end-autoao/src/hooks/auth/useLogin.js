import { authService } from "@/services";
import Cookies from "js-cookie";

export const useLogin = () => {
	const login = async (email, password) => {
		try {
			const user = await authService.login(email, password);
			if (user && user.data) {
				Cookies.set("currentUser", JSON.stringify(user.data));
				return user;
			} else {
				throw new Error("User data not found");
			}
		} catch (error) {
			console.error('Login error:', error);
			if (error.response && error.response.data) {
				const errorData = error.response.data;
				const errorMessage = errorData.message || 'Unknown error during login';
				throw new Error(errorMessage);
			}

			throw error;
		}
	};

	return { login };
};
