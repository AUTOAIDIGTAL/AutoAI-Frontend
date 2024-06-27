import { NextResponse } from "next/server";
import { authRoutes, protectedRoutes, superAdminRoutes } from "./routes/routes";

export function middleware(request) {
	let currentUser = request.cookies.get("currentUser")?.value;

	if (currentUser) {
		currentUser = JSON.parse(currentUser)
	}

	if (
		protectedRoutes.includes(request.nextUrl.pathname) &&
		(!currentUser || Date.now() > currentUser?.expiredAt)
	) {
		request.cookies.delete("currentUser");
		const response = NextResponse.redirect(new URL("/login", request.url));
		response.cookies.delete("currentUser");

		return response;
	}

	if (currentUser && authRoutes.includes(request.nextUrl.pathname) && !currentUser?.roles?.includes("SUPER_ADMIN")) {
		if (currentUser?.roles?.includes("MANAGER")) {
			return NextResponse.redirect(new URL("/admin-dashboard", request.url));
		} else if (currentUser?.roles?.includes("MECHANIC")) {
			return NextResponse.redirect(new URL("/mechanic-dashboard", request.url));
		}
	}

	if (
		superAdminRoutes.includes(request.nextUrl.pathname)
		&&
		!currentUser?.roles.includes("SUPER_ADMIN")
	) {
		const response = NextResponse.redirect(new URL("/admin-dashboard", request.url));
		return response;
	}

}
