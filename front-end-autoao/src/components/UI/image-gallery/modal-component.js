import React from "react";
import Image, { ImageProps } from "next/image";

export default function ModalComponent({
	images,
	selectedImage,
	onClose,
	onNext,
	onPrev,
	selectedIndex,
}) {
	return (
		selectedImage && (
			<div class="modal fade show d-flex justify-content-center align-items-center" id="lightbox" tabindex="-1" aria-labelledby="lightboxLabel" aria-hidden="true">
				<div class="modal-dialog modal-lg">
					<div class="modal-content bg-white">
						<div class="modal-header d-flex justify-content-between align-items-center">
							<h5 class="modal-title font-weight-bold" id="lightboxLabel">LightBox</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick={onClose}>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body position-relative">
							<button
								className="btn btn-dark text-white position-absolute top-50 right-0 translate-y-50"
								onClick={onNext}
							>
								&gt;
							</button>
							<button
								className="btn btn-dark text-white position-absolute top-50 left-0 translate-y-50"
								onClick={onPrev}
							>
								&lt;
							</button>
							<Image src={selectedImage} alt="Selected Image" class="img-fluid mx-auto d-block" width={500} height={500}></Image>
							<div class="text-center text-black-50 font-weight-bold mt-4">
								Image ${selectedIndex + 1}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	);
}
