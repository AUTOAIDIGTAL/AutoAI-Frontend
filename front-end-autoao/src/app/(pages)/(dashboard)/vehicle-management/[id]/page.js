"use client"
import VehicleManagementList from "@/components/UI/vehicle-managment-list";
import ServiceHistory from "@/components/service-history/service-history";
import { apiService } from "@/services";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { constants } from "../../garage-management/constant";
import EditModal from "../edit-modal/edit";


const ClientInformation = () => {

	const [vehicle, setVehicle] = useState(null);
	const router = useRouter();
	const params = useParams();

	useEffect(() => {
		const getVehicle = async () => {
			try {
				const data = await apiService.get(`${constants.vehicle}/${params.id}`)
				setVehicle(data)
			} catch (error) {
				console.log(error);
			}
		}
		getVehicle();
	}, [params.id])

	const handleDelete = async () => {
		await apiService.delete(`${constants.vehicle}/${vehicle._id}`);
		router.push('/vehicle-management')
	}

	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4 d-flex flex-column">
				<div className="flex-1 mb-4  overflow-auto">
					{vehicle && <VehicleManagementList vehicle={vehicle} />}
					{/* <div className="bg-gray-100 p-3 rounded-ai p-5 border-0 my-4">
						<div className="fs-5 fw-medium mb-4">Service History</div>
						{vehicle && <ServiceHistory vehicle={vehicle} />}
					</div> */}
				</div>
				<div className="d-flex justify-content-between align-items-center top-white-shadow">
					<Button variant="outline-secondary" className="py-2" onClick={() => router.push('/vehicle-management')}>
						Go Back
					</Button>
					<div className="d-flex align-items-center gap-2">
						<EditModal onVehicleUpdated={() => router.push('/vehicle-management')} vehicle={vehicle} />
						<Button variant="outline-danger" className="py-2" onClick={handleDelete}>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientInformation;
