"use client";
import { useEffect, useState } from "react";
import UserContent from "./user-content/user-content";
import { usePathname } from 'next/navigation'
import { linksMap, rolesMap } from "@/constants/user";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const PreHeader = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [pageTitle, setPageTitle] = useState('');
	const pathName = usePathname();
	console.log('pathName', pathName);

	const { user: currentUser } = useCurrentUser();


	useEffect(() => {
		console.log('currentUser', currentUser);
		for (const key in linksMap) {
			if (linksMap[key].link == pathName && pathName != '/profile') {
				console.log('here', linksMap[key].title)
				setPageTitle(linksMap[key].title)
			} else if (currentUser?.roles.includes('SUPER_ADMIN')) {
				setPageTitle(`Welcome ${currentUser?.firstName} ${currentUser?.lastName}`)
			} else if (pathName == '/profile' && !currentUser?.roles.includes('SUPER_ADMIN')) {
				setPageTitle(`Welcome ${currentUser?.firstName} ${currentUser?.lastName}`)
			}
		}

		if (sidebarOpen) {
			document.body.classList.add("sidebar-open");
		} else {
			document.body.classList.remove("sidebar-open");
		}
	}, [sidebarOpen, currentUser, pathName]);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="d-flex justify-content-between align-items-center">
			<div className="d-flex align-items-center">
				<button className="btn btn-link p-0 pe-2" onClick={toggleSidebar}>
					<svg
						width={40}
						height={23}
						viewBox="0 0 80 63"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0.999995 0.5C0.599995 1.43333 0.799969 16.6 0.933302 33L1.3333 63H40.6666H80V31.6667V0.333321H28.2581C-2.67524 0.399998 1.99998 0.5 0.999995 0.5ZM30 31.6667V61H16.6666H3.3333V31.6667V2.33332H16.6666H30V31.6667ZM78 31.6667V61H55.3333H32.6666V31.6667V2.33332H55.3333H78V31.6667Z"
							fill="black"
						/>
						<path
							d="M6.53306 7.8C5.19973 10.0667 8.2664 12.6 10.1331 10.7333C11.7331 9.13333 10.6664 6.33334 8.6664 6.33334C7.99973 6.33334 7.0664 7 6.53306 7.8Z"
							fill="black"
						/>
						<path
							d="M45.326 54.4667C43.9927 56.7334 47.0594 59.2667 48.926 57.4C50.526 55.8 49.4594 53 47.4594 53C46.7927 53 45.8594 53.6667 45.326 54.4667Z"
							fill="black"
						/>
						<path
							d="M14.5331 7.8C13.1997 10.0667 16.2664 12.6 18.1331 10.7333C19.7331 9.13333 18.6664 6.33334 16.6664 6.33334C15.9997 6.33334 15.0664 7 14.5331 7.8Z"
							fill="black"
						/>
						<path
							d="M53.326 54.4667C51.9927 56.7334 55.0594 59.2667 56.926 57.4C58.526 55.8 57.4594 53 55.4594 53C54.7927 53 53.8594 53.6667 53.326 54.4667Z"
							fill="black"
						/>
						<path
							d="M22.5331 7.8C21.1997 10.0667 24.2664 12.6 26.1331 10.7333C27.7331 9.13333 26.6664 6.33334 24.6664 6.33334C23.9997 6.33334 23.0664 7 22.5331 7.8Z"
							fill="black"
						/>
						<path
							d="M61.326 54.4667C59.9927 56.7334 63.0594 59.2667 64.926 57.4C66.526 55.8 65.4594 53 63.4594 53C62.7927 53 61.8594 53.6667 61.326 54.4667Z"
							fill="black"
						/>
						<path
							d="M6.53344 17.6667C4.66677 22.6 6.93344 23.8 16.9334 23.4C26.2668 23 26.6668 22.8667 26.6668 19.6667C26.6668 16.4667 26.2668 16.3334 16.9334 15.9334C9.20011 15.6667 7.20011 15.9334 6.53344 17.6667ZM24.6668 19.6667C24.6668 20.4667 21.0668 21 16.6668 21C12.2668 21 8.66678 20.4667 8.66678 19.6667C8.66678 18.8667 12.2668 18.3334 16.6668 18.3334C21.0668 18.3334 24.6668 18.8667 24.6668 19.6667Z"
							fill="black"
						/>
					</svg>
				</button>
				<div className="fs-1 fw-bold">{pageTitle}</div>
			</div>
			<UserContent />
		</div>
	);
};

export default PreHeader;
