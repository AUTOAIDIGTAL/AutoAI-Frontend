import { AuthService } from "./auth.service";
import { APIService } from "./api.service";

let BASE_URL = process.env.NEXT_PUBLIC_API_URL
export const authService = new AuthService(BASE_URL);
export const apiService = new APIService(BASE_URL);
