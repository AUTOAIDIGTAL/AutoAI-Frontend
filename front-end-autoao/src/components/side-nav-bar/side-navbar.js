"use client";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useLogout } from "@/hooks/auth/useLogout";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { linksMap, rolesMap } from "@/constants/user";

const NavBar = () => {
	const router = useRouter();
	const { logout } = useLogout();
	const { user: currentUser } = useCurrentUser();
	const rolesToBeDisplayed = new Set();

	currentUser?.roles?.forEach((role) => {
		rolesMap[role]?.forEach((r) => rolesToBeDisplayed.add(r));
	});

	return (
		<div className="sideBarNav">
			<div className="menu-brand-wrap">
				<Image
					className="mb-2 d-block d-lg-inline-block mx-auto toggle-brand-hide"
					src="/assets/images/brand/logo.svg"
					alt="logo"
					width={120}
					height={57}
					priority
				/>
				<Image
					className="toggle-brand"
					src="/assets/images/brand/logo-icon.svg"
					alt="logo"
					width={30}
					height={40}
					priority
				/>
			</div>
			<Nav defaultActiveKey="/dashboard" className="flex-column gap-4">
				{Array.from(rolesToBeDisplayed).map((role, index) => {
					const { link, icon, title } = linksMap[role];
					return (
						<Nav.Link key={index} href={link} active={window.location.pathname.includes(link)}>
							<i className={icon}></i>
							<div className="menu-text-wrap">{title}</div>
						</Nav.Link>
					);
				})}
			</Nav>
			<div className="side-nav-bottom">
				<Link
					className=""
					href="/login"
					onClick={() => {
						router.push("/login");
						logout();
					}}
				>
					<Image
						className=""
						src="/assets/images/icons/logout.svg"
						alt="logout"
						width={15}
						height={15}
						priority
					/>
					<div className="menu-text-wrap">Logout</div>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
