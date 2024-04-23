import { authService } from "../../services";
import Cookies from "js-cookie";

export const useLogin = () => {
	const login = async (email, password) => {
		const user = await authService.login(email, password);
		if (user) {
			Cookies.set("currentUser", JSON.stringify(user));
		}
		return user
	};

	return { login };
};
