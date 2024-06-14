import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Chart from "react-apexcharts";

const JobsStatus = () => {
  const apexAreaChart1Opts = {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    colors: ["#727cf5", "#6c757d"],
    legend: {
      offsetY: -10,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    tooltip: {
      fixed: {
        enabled: false,
        position: "topRight",
      },
    },
    grid: {
      row: {
        colors: ["transparent", "transparent"],
        opacity: 0.2,
      },
      borderColor: "#f1f3fa",
    },
  };

  // chart data
  const apexAreaChart1Data = [
    {
      name: "Series 1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Series 2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  return (
    <Card className="bg-white p-4 rounded-md border-0 shadow-lg w-100">
      <Card.Header className="border-0 bg-transparent h5 mb-3 mx-0 px-0">
        Jobs Status
      </Card.Header>
      <Card.Body className="p-0">
        <Chart
          options={apexAreaChart1Opts}
          series={apexAreaChart1Data}
          type="area"
          height={400} // Set height here
          className="apex-charts"
        />
      </Card.Body>
    </Card>
  );
};

export default JobsStatus;
