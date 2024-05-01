import { useEffect, useState } from "react";
import Image from "next/image";
import ModalComponent from "./modal-component";
import ModalImage from "react-modal-image";

export default function ImageGallery({ data }) {

	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [images, setImages] = useState([]);

	useEffect(() => {
		// data = ['https://picsum.photos/200/200', 'https://picsum.photos/200/200', 'https://picsum.photos/200/200']
		console.log(data);
		data && setImages(data);
	}, []);

	const handleNext = () => {
		const nextIndex =
			selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
		setSelectedImage(images[nextIndex].src);
		setSelectedIndex(nextIndex);
	};

	const handlePrev = () => {
		const prevIndex =
			selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
		setSelectedImage(images[prevIndex].src);
		setSelectedIndex(prevIndex);
	};

	const handleOnClicked = (imageSrc, index) => {
		console.log('imageSrc', imageSrc);
		setSelectedImage(imageSrc);
		setSelectedIndex(index);
	};

	const handleCloseModal = () => {
		console.log('close')
		setSelectedImage(null);
		setSelectedIndex(0);
	};

	return (
		<div className="flex flex-col">
			{
				images && images?.map((image, index) => (
					<ModalImage
						small={image}
						large={image}
						alt="Hello World!"
						width={50}
						height={50}
						className="test"
					/>
				))
			}
		</div >
	);
}
