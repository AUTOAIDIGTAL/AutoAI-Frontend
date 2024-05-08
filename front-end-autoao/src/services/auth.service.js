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
				.then((res, err) => {
					if (err) {
						console.log('ERROR FROM HERE', err)
					}
					return res.data;
				})
		} catch (error) {
			console.log('ERROR FROM HERE', error)
			return error
		}
	};


	getMe = (userId) => {
		return this.instance
			.get(`/user/${userId}`, {
				headers: getAuthorizationHeader(),
			})
			.then((res) => {
				return res.data;
			});
	};

}