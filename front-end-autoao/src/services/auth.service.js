import axios, { AxiosInstance } from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";

export class AuthService {

	constructor(url) {
		this.instance = axios.create({
			baseURL: url,
			timeout: 30000,
			timeoutErrorMessage: "Time out!",
		});
	}

	login = async (email, password) => {
		try {
			return await this.instance
				.post("/user/login", {
					email,
					password,
				})
				.then((res) => {
					return res.data;
				});
		} catch (error) {
			console.log(error)
		}
	};

	getMe = (userId) => {
		return this.instance
			.get(`/users/${userId}`, {
				headers: getAuthorizationHeader(),
			})
			.then((res) => {
				return res.data;
			});
	};

}