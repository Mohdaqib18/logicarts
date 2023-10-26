import React from "react";
import { ChartSection } from "./ChartSection";
import Table from "./Table";

const HomePage = (props) => {
	return (
		<div>
			<ChartSection setSelectedPie={props.setSelectedPie} />
			<Table selectedPie={props.selectedPie} />
		</div>
	);
};

export default HomePage;
