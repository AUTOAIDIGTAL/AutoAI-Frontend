import VehicleClientInformation from "@/components/UI/vehicle-client-information";
import TableV from "@/components/UI/TableV";
import { Button, Col, ListGroup, Row } from "react-bootstrap";


export async function generateStaticParams() {
	return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

const ClientInformation = () => {
	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4 d-flex flex-column">
				<div className="flex-1 mb-4  overflow-auto">
					<VehicleClientInformation />
					<div className="ai-box py-3 px-4 border-0 shadow mx-3 my-5">
						<div className="fs-5 fw-medium mb-2">Vehicles</div>
						<TableV />
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center top-white-shadow">
					<Button variant="outline-secondary" className="py-2">
						Go Back
					</Button>
					<div className="d-flex align-items-center gap-2">
						<Button variant="outline-primary" className="py-2">
							Edit
						</Button>
						<Button variant="outline-danger" className="py-2">
							Delete
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientInformation;
