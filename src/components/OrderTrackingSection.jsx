import React from "react";
import checkSquare from "../assets/Check Square.png";
import searchDollar from "../assets/Search Dollar.png";
import shippingTruck from "../assets/Shipping Truck.png";
import warehouse from "../assets/Warehouse.png";
import consigmnent from "../assets/cabinet.png";
import timer from "../assets/timer.png"

const OrderTrackingSection = () => {
	return (
		<div className="flex-col ">
			<div className="flex justify-center mt-[40px]">
				<ul className="flex w-[50%] items-center">
					<li className="bg-[#67BDEA] border rounded-[30px] w-[50px] h-[50px] flex items-center justify-center">
						<img src={searchDollar} />
						<p className="absolute mt-[90px]">Consignment Booked</p>
					</li>

					<li className="bg-[#67BDEA] w-[200px] h-[4px] mx-[1px]"></li>
					<li className="bg-[#67BDEA] border rounded-[30px] w-[50px] h-[50px] flex items-center justify-center">
						<img src={warehouse} />
						<p className="absolute mt-[90px]">Picked up</p>
					</li>
					<li className="bg-[#67BDEA] w-[200px] h-[4px] mx-[1px]"></li>
					<li className="bg-[#67BDEA] border rounded-[30px] w-[50px] h-[50px] flex items-center justify-center">
						<img src={shippingTruck} />
						<p className="absolute mt-[90px]">Branch out Carting</p>
					</li>
					<li className="bg-[#D9D9D9] w-[200px] h-[4px] mx-[1px]"></li>
					<li className="bg-[#D9D9D9] border rounded-[30px] w-[50px] h-[50px] flex items-center justify-center">
						<img src={checkSquare} />
						<p className="absolute mt-[90px]">Delivered Successfully</p>
					</li>
				</ul>
			</div>
			<div className=" flex justify-center mt-[100px]">
				<div className="bg-[#65B6E0] w-[340px] h-[60px] flex items-center justify-center text-white border rounded-[10px] font-semibold ">
					<p>Docket No- L123456789</p>
				</div>
			</div>
			<div className="flex justify-center items-center mt-10 ">
				<div>
					<div className="flex  items-center">
						<img className="w-[15px] ml-[-20px] mr-2" src={consigmnent} />
						<p className="font-semibold flex ">Consignor</p>
					</div>
					<p className="font-bold mt-[12px]">RAW PRESSERY PRIVATE LIMITED</p>
					<div className="text-gray-400 mt-[12px]">
						<p>Y-36,OKHLA INDUSTRIAL AREA PHASE-II, OKHLA,</p>
						<p>New Delhi, South East Delhi, Delhi, 110020</p>
					</div>
				</div>
				<div className="bg-gray-500 h-[210px] w-[1px] mx-6"></div>
				<div className="ml-3">
					<div className="flex  items-center ">
						<img className="w-[15px] ml-[-20px] mr-2" src={consigmnent} />
						<p className="font-semibold flex  ">Consignor</p>
					</div>
					<p className="font-bold mt-[12px]">
						Balarema Agencies-Kerala Distributor -
					</p>
					<div className="text-gray-400 mt-[12px]">
						<p>Vallikad, Muttungal, Vadakara nIV -436 G, -IV -336</p>
						<p>H,OMEGA Building nKozhikode,-,673104</p>
					</div>
				</div>
				<div className="bg-gray-400 h-[210px] w-[1px] mx-6"></div>
				<div className="ml-3">
					<div className="flex  items-center">
						<img className="w-[15px] ml-[-20px] mr-2" src={timer} />
						<p className="font-semibold flex ">Shipment Booked Date</p>
					</div>
					<p className="font-bold mt-[12px] opacity-0">dffdfdsf</p>
					<div className="text-gray-400 mt-[12px]">
						<p>2023-09-01T14:55:05.000Z</p>
						<p className=" opacity-0">fdfsd</p>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-center  mt-10 ">
				<div>
					<ul className="flex justify-between gap-[1px] items-center justify-center text-center mt-2">
						<li className="font-semibold bg-[#D9D9D9]">Date/Time</li>
						<li className="font-semibold bg-[#D9D9D9]">Location</li>
						<li className="font-semibold bg-[#D9D9D9]">Status</li>
					</ul>
					<ul className="flex items-center justify-center text-center mt-2">
						<li className="">2023-09-09T19:24:01.000Z</li>
						<li className="">BLR</li>
						<li className="">Delivered Successfully</li>
					</ul>
					<ul className="flex items-center justify-center text-center mt-2">
						<li className="">2023-09-04T18:57:39.000Z</li>
						<li className="">BLR</li>
						<li className="">Branch Out Carting</li>
					</ul>
					<ul className="flex items-center justify-center text-center mt-2">
						<li className="">2023-09-01T18:57:02.000Z</li>
						<li className="">BLR</li>
						<li className="">Picked Up</li>
					</ul>
					<ul className="flex items-center justify-center text-center mt-2    ">
						<li className="">2023-09-01T14:55:05.000Z</li>
						<li className="">BLR</li>
						<li className="">Consigment Booked</li>
					</ul>
				</div>
			</div>
			<div className=" flex justify-center my-[15px]">
				<div className="bg-[#65B6E0] w-[240px] h-[40px] flex items-center justify-center text-white border rounded-[10px] font-semibold ">
					<p>DOWNLOAD POD</p>
				</div>
			</div>
		</div>
	);
};

export default OrderTrackingSection;
