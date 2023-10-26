import React from "react";
import { Chart } from "react-google-charts";

const data = [
	["Status", "Count"],
	["Consignment booked", 2],
	["In Transit", 1],
	["Out for delivery", 1],
	["Delivered Successfully", 1],
	// CSS-style declaration
];

const options = {
	// title: "Status Overview",
	pieHole: 0.3,
	is3D: false,
	slices: {
		0: { color: "#757C7C" },
		1: { color: "#C38181" },
		2: { color: "#5589C7" },
		3: { color: "#87A65F" },
	},
	pieSliceText: "value",
};

export const ChartSection = (props) => {
	const chartEvents = [
		{
			eventName: "select",
			callback({ chartWrapper }) {
				console.log("Selected ", chartWrapper.getChart().getSelection()[0].row);

				props.setSelectedPie(chartWrapper.getChart().getSelection()[0].row);

			},
		},
	];

	return (
		<Chart
			chartType="PieChart"
			width="100%"
			height="280px"
			data={data}
			options={options}
			chartEvents={chartEvents}
		/>
	);
};
