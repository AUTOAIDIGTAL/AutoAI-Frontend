"use client"
import { Nav, Dropdown } from "react-bootstrap";
import Avatar from "../../avatar/avatar";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";

const DropdownUser = () => {

	const { user: currentUser } = useCurrentUser();
	return (
		<div className="auto-ai-user-avatar-name">
			<Dropdown>
				<Dropdown.Toggle
					variant="avatar-dropdown"
					className="border-0"
					id="dropdown-basic"
				>
					<div className="d-inline-flex align-items-center gap-2">
						<Avatar imgSrc={`https://autoai.s3.amazonaws.com/${currentUser?.profileImg}`} />
						<span className="pro-user-name">{currentUser?.firstName} {currentUser?.lastName}</span>
					</div>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="/profile">Profile</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
};

export default DropdownUser;
