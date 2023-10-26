import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChartSection } from "../src/components/ChartSection";
import Table from "../src/components/Table.jsx";
import HomePage from "./components/HomePage";
import OrderTrackingSection from "./components/OrderTrackingSection";

function App() {
	const [selectedPie, setSelectedPie] = useState(null);
	console.log(selectedPie);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage selectedPie={selectedPie} setSelectedPie={setSelectedPie} />} />
				<Route path="/tracking" element={<OrderTrackingSection/>} />

				

			</Routes>
		</BrowserRouter>
	);
}

export default App;

