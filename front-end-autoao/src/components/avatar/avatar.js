import { Nav, Dropdown } from "react-bootstrap";
import Image from "next/image";

const Avatar = () => {
	return (
		<div className="avatar">
			<Image
				src="https://picsum.photos/200/300"
				width={50}
				height={57}
				alt="logo"
				priority
			></Image>
		</div>
	);
};

export default Avatar;
