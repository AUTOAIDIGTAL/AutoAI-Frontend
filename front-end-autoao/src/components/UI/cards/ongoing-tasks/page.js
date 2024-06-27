"use client";

import { Card, Stack } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Chart from "react-apexcharts";

const OngoingTasks = () => {

	const chart = {
		options: {
			chart: {
				id: 'apexchart-example'
			},
			xaxis: {
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
			}
		},
		series: [{
			name: 'series-1',
			data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
		}]
	}

	return (
		<>
			<Card
				className="bg-gray-100 p-3 rounded-ai-md border-0 OngoingTasksCard shadow-shadow-2xl"
				style={{
					padding: "20px",
					borderRadius: "10px",
				}}
			>
				<Card.Body>
					<Stack direction="horizontal" gap={3}>
						<div className="card-icon bg-primary-light-sec d-flex justify-content-center align-items-center text-primary">
							<FaChevronLeft />
						</div>
						<div className="lh-1">
							<div className="text-muted">Total jobs created</div>
							<div className="text-dark fs-3 fw-semibold pt-2">780</div>
						</div>
					</Stack>

					<div className="d-flex justify-content-between align-items-center pt-4">
						<Chart
							options={chart.options}
							series={chart.series}
							type="line"
							height={100}
							className="apex-charts"
						/>
						<div className="d-flex gap-1"><div className="text-danger">-15%</div> This Month</div>
					</div>
				</Card.Body>
			</Card>
		</>
	);
};

export default OngoingTasks;
