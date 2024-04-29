import Image from "next/image";
// import styles from "./page.module.css";

import Link from 'next/link'

export default function Home() {
	return (
		<main>
			<div className="auth-page align-items-center py-2 justify-content-center gap-2">
				<Link className="btn btn-primary" href="/login">Go To Login Page</Link>
				<Link className="btn btn-primary" href="/profile/">Go To Dasboard</Link>
				<Link className="btn btn-primary" href="/garage-managemenr/">Go To Garage Managemenr</Link>
				<Link className="btn btn-primary" href="/garage-managemenr-administration/">Go To Garage Managemenr Administration</Link>
				<Link className="btn btn-primary" href="/client-managment/">Go To Client Managemenr</Link>
				<Link className="btn btn-primary" href="/vehicle-managment/">Go To Vehicle Managment</Link>
				<Link className="btn btn-primary" href="/job-managment/">Go To Job Managment</Link>
			</div>
		</main>
	);
}
