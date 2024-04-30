import Image from "next/image";
import ImageGallery from "./image-gallery/Image-gallery";
const VehicleManagementList = ({ vehicle }) => {
	return (
		<>
			{vehicle && <div className="divider-list">
				<div className="divider-list-wrap">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Car Make</div>
							<div className="fs-6 text-dark fw-semibold">{vehicle?.make}</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Car Model</div>
							<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
								{vehicle?.model}							</div>
						</div>
					</div>
				</div>
				<div className="divider-list-wrap">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Year of Manufacture</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								{vehicle?.year}							</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">VIN</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								{vehicle?.vinNumber}
							</div>
						</div>
					</div>
				</div>
				<div className="divider-list-wrap">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Company</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								{vehicle?.owner?.company}										</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Owned By</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								{vehicle?.owner?.name}								</div>
						</div>
					</div>
				</div>
				<div className="divider-list-wrap">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Color</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								{vehicle?.color}
							</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Fuel</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								{vehicle?.fuelType}								</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Make - Model</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								{vehicle?.make} - {vehicle?.model}
							</div>
						</div>
					</div>
				</div>
				<div className="divider-list-wrap">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Mileage</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								{vehicle?.mileage}
							</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Images</div>
							<div className="">
								<ImageGallery data={vehicle?.images} />
							</div>
						</div>
					</div>
				</div>
			</div >}
		</>
	);
};

export default VehicleManagementList;


