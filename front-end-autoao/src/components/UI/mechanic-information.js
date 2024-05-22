import { Badge } from "react-bootstrap";

const MechanicInformation = ({ mechanic }) => {
	return (
		<>
			<div className="divider-list">
				<div className="divider-list-wrap">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Mechanic</div>
							<div className="fs-6 text-dark fw-semibold">{mechanic?.user?.firstName} {mechanic?.user?.lastName}</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Position</div>
							<div className="fs-6 text-dark fw-semibold d-flex align-items-center gap-2">
								{mechanic?.user?.roles.join(", ")}
							</div>
						</div>
					</div>
				</div>
				<div className="divider-list-wrap">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Emergency Contact</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								<svg
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.5146 16C8.70972 16 5.71444 14.9693 3.3725 12.6275C1.03447 10.2894 0 7.29613 0 4.48541C0 2.00825 2.00413 0 4.48541 0C4.67709 0 4.84944 0.116687 4.92063 0.294656L6.92897 5.3155C7.02513 5.55587 6.90822 5.82866 6.66787 5.92481L4.46172 6.80725C4.61778 9.34531 6.65509 11.3825 9.19275 11.5383L10.0752 9.33219C10.1712 9.09222 10.4438 8.97487 10.6845 9.07106L15.7053 11.0794C15.8833 11.1506 16 11.3229 16 11.5146C16 13.9918 13.9959 16 11.5146 16ZM4.17344 0.950938C2.37819 1.10628 0.9375 2.61172 0.9375 4.48541C0.9375 7.31066 2.03769 9.96681 4.03544 11.9645C6.03316 13.9623 8.68931 15.0625 11.5146 15.0625C13.3877 15.0625 14.8936 13.6226 15.0491 11.8266L10.7716 10.1156L9.94147 12.1908C9.87031 12.3687 9.69794 12.4854 9.50625 12.4854C6.20222 12.4854 3.51459 9.79778 3.51459 6.49425C3.51459 6.30259 3.63128 6.12969 3.80925 6.05853L5.88444 5.22844L4.17344 0.950938Z"
										fill="#1474FB"
									/>
								</svg>
								{mechanic?.emergencyContactNo}
							</div>
						</div>
					</div>
					<div className="divider-list-wrap-auto">
						<div className="vr mx-3 d-none d-md-flex col-auto px-0"></div>
					</div>
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Phone Number</div>
							<div className="fs-6 fw-medium text-dark d-flex align-items-center gap-2">
								<svg
									width={16}
									height={16}
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.5146 16C8.70972 16 5.71444 14.9693 3.3725 12.6275C1.03447 10.2894 0 7.29613 0 4.48541C0 2.00825 2.00413 0 4.48541 0C4.67709 0 4.84944 0.116687 4.92063 0.294656L6.92897 5.3155C7.02513 5.55587 6.90822 5.82866 6.66787 5.92481L4.46172 6.80725C4.61778 9.34531 6.65509 11.3825 9.19275 11.5383L10.0752 9.33219C10.1712 9.09222 10.4438 8.97487 10.6845 9.07106L15.7053 11.0794C15.8833 11.1506 16 11.3229 16 11.5146C16 13.9918 13.9959 16 11.5146 16ZM4.17344 0.950938C2.37819 1.10628 0.9375 2.61172 0.9375 4.48541C0.9375 7.31066 2.03769 9.96681 4.03544 11.9645C6.03316 13.9623 8.68931 15.0625 11.5146 15.0625C13.3877 15.0625 14.8936 13.6226 15.0491 11.8266L10.7716 10.1156L9.94147 12.1908C9.87031 12.3687 9.69794 12.4854 9.50625 12.4854C6.20222 12.4854 3.51459 9.79778 3.51459 6.49425C3.51459 6.30259 3.63128 6.12969 3.80925 6.05853L5.88444 5.22844L4.17344 0.950938Z"
										fill="#1474FB"
									/>
								</svg>
								{mechanic?.user?.phoneNumber}
							</div>
						</div>
					</div>
				</div>
				<div className="divider-list-wrap">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Addrss</div>
							<div className="d-flex align-items-center gap-4">
								<div>
									<div className="small text-dark">Street Name</div>
									<div className="fs-6 text-muted">								{mechanic?.user?.address?.street}
									</div>
								</div>
								<div>
									<div className="small text-dark">Locality</div>
									<div className="fs-6 text-muted">								{mechanic?.user?.address?.country}
									</div>
								</div>
								<div>
									<div className="small text-dark">City/Post Town</div>
									<div className="fs-6 text-muted">								{mechanic?.user?.address?.city}
									</div>
								</div>
								<div>
									<div className="small text-dark">Post Code</div>
									<div className="fs-6 text-muted">								{mechanic?.user?.address?.postalCode}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="divider-list-wrap border-0">
					<div className="divider-list-wrap-flex">
						<div className="d-flex justify-content-between align-items-center">
							<div className="fs-6 text-dark">Skills</div>
							<div className="d-flex align-items-center gap-4">
								{" "}
								<div className="d-flex flex-wrap align-items-center gap-2">
									{mechanic?.services.map((service, index) => (
										<Badge bg="light" key={index} className="fw-normal rounded-ai fs-base-13">
											{service.name}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MechanicInformation;
