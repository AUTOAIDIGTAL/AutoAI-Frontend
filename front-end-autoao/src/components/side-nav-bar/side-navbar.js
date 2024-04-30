"use client";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useLogout } from "@/hooks/auth/useLogout";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { linksMap, rolesMap } from "@/constants/user";

const NavBar = () => {

	const router = useRouter()
	const { logout } = useLogout();
	const { user: currentUser } = useCurrentUser();
	let rolesToBeDisplayed = [];
	const { Link } = Nav;
	currentUser?.roles?.forEach((role) => {
		if (!rolesToBeDisplayed.includes(role)) rolesToBeDisplayed.push(...rolesMap[role])
	})

	return (
		<div className="sideBarNav">
			<div className="menu-brand-wrap">
				<Image
					className="mb-2 d-block d-lg-inline-block mx-auto toggle-brand-hide"
					src="./../../assets/images/brand/logo.svg"
					alt="logo"
					width={120}
					height={57}
					priority
				/>
				<Image
					className="toggle-brand"
					src="./../../assets/images/brand/logo-icon.svg"
					alt="logo"
					width={30}
					height={40}
					priority
				/>
			</div>
			<Nav defaultActiveKey="/home" className="flex-column gap-4">

				{rolesToBeDisplayed.map((role, index) => {
					return <Nav.Link key={index} href={linksMap[role]?.link}>
						<Image
							className="active"
							src={linksMap[role].image}
							alt={linksMap[role].title}
							width={15}
							height={15}
							priority
						/>
						<div className="menu-text-wrap">{linksMap[role].title}</div>
					</Nav.Link>
				})}
			</Nav>
			<div className="side-nav-bottom">
				<Link
					className=""
					href="/login"
					onClick={() => {
						logout();
						router.push("/login");
					}}
				>
					<Image
						className=""
						src="./../../assets/images/icons/logout.svg"
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