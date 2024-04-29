import { AuthService } from "./auth.service";
import { APIService } from "./api.service";

let BASE_URL = 'http://54.174.49.219:3000/api/'
export const authService = new AuthService(BASE_URL);
export const apiService = new APIService(BASE_URL);
