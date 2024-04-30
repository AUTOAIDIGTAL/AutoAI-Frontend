import { authService } from "../../../services";
import Cookies from "js-cookie";

export const useSignUp = () => {
	const signup = async (data) => {
		try {
			const user = await authService.signUp(data);
			if (user) {
				Cookies.set("currentUser", JSON.stringify(user));
			}
			return user;
		} catch (error) {
			console.error(error);
			throw error; // Rethrow the error for handling in the caller function if needed
		}
	};

	return { signup };
};
