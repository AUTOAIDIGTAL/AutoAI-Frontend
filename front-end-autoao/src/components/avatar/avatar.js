import { Nav, Dropdown } from "react-bootstrap";
import Image from "next/image";

const Avatar = () => {
	return (
		<div className="avatar">
			<Image
				src="https://picsum.photos/200/300"
				width={50}
				height={57}
			></Image>
			{/* <img
				className="d-block d-lg-inline-block mx-auto"
				src="https://picsum.photos/200/300"
				alt="logo"
				width={50}
				height={57}
				priority
			/> */}
		</div>
	);
};

export default Avatar;
