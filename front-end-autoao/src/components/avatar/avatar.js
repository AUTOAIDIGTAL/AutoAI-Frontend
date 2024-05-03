import { Nav, Dropdown } from "react-bootstrap";
import Image from "next/image";

const Avatar = ({ imgSrc }) => {
	console.log(imgSrc);
	return (
		<div className="avatar">
			<Image
				src={imgSrc}
				width={50}
				height={57}
				alt="logo"
				priority
			></Image>
		</div>
	);
};

export default Avatar;
