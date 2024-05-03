import { AuthService } from "./auth.service";
import { APIService } from "./api.service";

let BASE_URL = 'https://autoai.musaafirapp.com/api/'
export const authService = new AuthService(BASE_URL);
export const apiService = new APIService(BASE_URL);
