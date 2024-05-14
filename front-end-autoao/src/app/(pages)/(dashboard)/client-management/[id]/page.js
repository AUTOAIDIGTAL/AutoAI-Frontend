"use client"
import VehicleClientInformation from "@/components/UI/vehicle-client-information";
import TableV from "@/components/UI/TableV";
import { Button, Col, ListGroup, Row } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { constants } from "../../garage-management/constant";
import { apiService } from "@/services";
import EditModal from "../(edit-modal)/edit-modal";


const ClientInformation = () => {

	const [client, setClient] = useState(null);
	const [refetch, setRefetch] = useState(false);

	const params = useParams();
	const router = useRouter();

	useEffect(() => {
		const getClient = async () => {
			try {
				const data = await apiService.get(`${constants.customer}/${params.id}`)
				setClient(data)
			} catch (error) {
				console.log(error);
			}
		}
		getClient();
	}, [params.id, refetch])


	const handleDelete = async () => {
		await apiService.delete(`${constants.customer}/${client._id}`);
		router.push('/client-management')
	}


	const handleRefetch = () => {
		setRefetch(!refetch)
	};

	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4 d-flex flex-column">
				<div className="flex-1 mb-4  overflow-auto">
					<VehicleClientInformation client={client} />
					<div className="ai-box py-3 px-4 border-0 shadow mx-3 my-5">
						<div className="fs-5 fw-medium mb-2">Vehicles</div>
						{client?.vehicleIds != undefined && <TableV vehicles={client?.vehicleIds} />}
					</div>
				</div>
				<div className="d-flex justify-content-between align-items-center top-white-shadow">
					<Button variant="outline-secondary" onClick={() => router.push('/client-management')
					}>
						Go Back
					</Button>
					<div className="d-flex align-items-center gap-2">
						<EditModal customerId={client?._id} handleRefetch={handleRefetch} />
						<Button variant="outline-danger" onClick={handleDelete}>
							Delete
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ClientInformation;
