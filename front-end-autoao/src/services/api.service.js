import axios, { AxiosInstance } from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";

export class APIService {

	constructor(url) {
		this.instance = axios.create({
			baseURL: url,
			timeout: 30000,
			timeoutErrorMessage: "Time out!",
			headers: getAuthorizationHeader(),
		});
	}

	get = async (path) => {
		try {
			return await this.instance
				.get(path)
				.then((res) => {
					return res.data.status && res.data.data;
				});
		} catch (error) {
			console.log(error)
			throw error
		}
	};

	getWithParams = async (path, params) => {
		try {
			return await this.instance
				.get(path, { params })
				.then((res) => {
					return res.data.status && res.data.data;
				});
		} catch (error) {
			console.log(error)
			throw error
		}
	};

	post = async (path, data) => {
		try {
			return await this.instance
				.post(path, data)
				.then((res) => {
					return res.data.status && res.data.data;
				});
		} catch (error) {
			console.log(error)
			throw error
		}
	};

	put = async (path, data) => {
		try {
			return await this.instance
				.put(path, data, {
					headers: getAuthorizationHeader(),
				})
				.then((res) => {
					console.log('res', res)
					return res.data.status && res.data.data;
				});
		} catch (error) {
			console.log(error)
			throw error
		}
	};

	delete = async (path, data) => {
		try {
			return await this.instance
				.delete(path)
				.then((res) => {
					return res.data.status && res.data.data;
				});
		} catch (error) {
			console.log(error)
			throw error
		}
	};

}