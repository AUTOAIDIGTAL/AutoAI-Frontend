import { useEffect, useState } from "react";
import Image from "next/image";
import ModalComponent from "./modal-component";
import ModalImage from "react-modal-image";
import { Button } from "react-bootstrap";
import { apiService } from "@/services";
import { constants } from "@/app/(pages)/(dashboard)/garage-management/constant";
import { message } from "antd";

export default function ImageGallery({ data, id, handleRefetch }) {

	console.log('data', data);
	const [selectedImage, setSelectedImage] = useState(null);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [images, setImages] = useState([]);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		data && setImages(data);
	}, [rerender, images, data]);

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
		// imageSrc', imageSrc);
		setSelectedImage(imageSrc);
		setSelectedIndex(index);
	};

	const handleCloseModal = () => {
		// close')
		setSelectedImage(null);
		setSelectedIndex(0);
	};

	const removeImage = async (src) => {
		try {
			message.open({
				type: 'loading',
				content: 'Removing Image...',
				duration: 0,
			})
			const response = await apiService.put(`${constants.vehicle}/${id}`, { removeImages: [src] })
			if (response) {
				message.destroy();
				handleRefetch()
				setRerender(!rerender)
				message.success('Image Removed Successfully');
			}
		} catch (error) {
			message.destroy();
			message.error('Image Cannot be removed.');
			console.log(error);
		}
	}

	return (
		<div className="flex flex-col d-inline-flex gap-2">
			{
				images && images?.map((image, index) => (
					<div>
						<Image
							onClick={() => removeImage(image)}
							width={20}
							height={20}
							src={'/assets/images/icons/imagecross.svg'}
							className="pointer-cursor"
							role="button"
						/>

						<ModalImage
							key={index}
							small={`https://autoai.s3.amazonaws.com/${image}`}
							large={`https://autoai.s3.amazonaws.com/${image}`}
							alt="Hello World!"
							width={100}
							height={100}
							className="img-thumb relative"
						/>
					</div>
				))
			}
		</div >
	);
}
