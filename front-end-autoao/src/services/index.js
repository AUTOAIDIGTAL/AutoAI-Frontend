import { AuthService } from "./auth.service";

let BASE_URL = 'http://18.212.99.130:3000/api/'
export const authService = new AuthService(BASE_URL);
