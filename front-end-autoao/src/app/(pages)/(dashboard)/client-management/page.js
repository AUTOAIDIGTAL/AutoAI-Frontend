"use client";
import TableCM from "@/components/UI/TableCM";
import PaginationUi from "@/components/UI/Pagination";
import Link from "next/link";
import { constants } from "../garage-management/constant";
import { apiService } from "@/services";
import { useEffect, useState } from "react";
import ClientModal from "./create-modal/modal";
import { message } from 'antd'

const ClientManagement = () => {
	const [clients, setClients] = useState(null);
	const [refetch, setRefetch] = useState(false);

	useEffect(() => {
		const getClients = async () => {
			try {
				const data = await apiService.get(constants.customer)
				setClients(data)
			} catch (error) {
				console.log(error);
			}
		};
		getClients();
	}, [refetch]);


	const handleRefetch = () => {
		setRefetch(!refetch)
	};


	return (
		<>
			<div className="ai-box min-screen-layout mt-3 p-4">
				<div className="d-flex justify-content-between align-items-center">
					<div className="fs-3 fw-medium">Client management</div>
					<ClientModal handleRefetch={handleRefetch} />
				</div>
				<div className="flex-1 pt-3">
					<TableCM clients={clients} />
					{/* <PaginationUi /> */}
				</div>
			</div>
		</>
	);
};

export default ClientManagement;
