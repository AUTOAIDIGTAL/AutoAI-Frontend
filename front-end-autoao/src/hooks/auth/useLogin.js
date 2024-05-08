import { authService } from "../../services";
import Cookies from "js-cookie";

export const useLogin = () => {
	const login = async (email, password) => {
		try {
			const user = await authService.login(email, password);
			if (user.data) {
				Cookies.set("currentUser", JSON.stringify(user?.data));
				return user
			} else if (!user.data) {
				return user
			}
		} catch (error) {
			console.log('lul')
			return error
		}
	};

	return { login };
};
