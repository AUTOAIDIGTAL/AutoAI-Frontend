import { Inter } from "next/font/google";
// import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/sass/app.scss";
import NavBar from "@/components/side-nav-bar/side-navbar";
import PreHeader from "@/components/pre-header/pre-header";
import ErrorBoundary from "./error-boundry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Auto Ai",
	description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ErrorBoundary>
					{children}
				</ErrorBoundary>
			</body>
		</html>
	);
}

export default RootLayout