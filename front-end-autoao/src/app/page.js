import Image from "next/image";
// import styles from "./page.module.css";

import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<div className="auth-page align-items-center py-2 justify-content-center gap-2">
				<Link className="btn btn-primary" href="/login">Go To Login Page</Link>
				<Link className="btn btn-primary" href="/profile/">Go To Dashboard</Link>
				<Link className="btn btn-primary" href="/garage-management/">Go To Garage Management</Link>
				<Link className="btn btn-primary" href="/manage-administration/">Go To Manage Administration</Link>
				<Link className="btn btn-primary" href="/client-management/">Go To Client Management</Link>
				<Link className="btn btn-primary" href="/vehicle-management/">Go To Vehicle Management</Link>
				<Link className="btn btn-primary" href="/job-management/">Go To Job Management</Link>
			</div>
		</main>
	);
}
