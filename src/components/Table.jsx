import React from "react";
import actionBtn from "/src/assets/action-btn.png";
import { useNavigate } from "react-router-dom";

const Table = (props) => {
     const navigate = useNavigate();
    
	return (
		<div className="flex justify-center   font-Roboto text-center ">
			<div className="w-[60%] flex-col  items-center border border-x-[#D9D9D9]">
				<ul className="flex justify-between bg-[#A9DCF6] p-[10px] ">
					<li>Docket No</li>
					<li>From</li>
					<li>To</li>
					<li>Status</li>
					<li>Actions</li>
				</ul>
				<ul
					className={`flex justify-between p-[10px] bg-[#D9D9D9] ${
						props.selectedPie === 0 || props.selectedPie === null
							? "opacity-[1]"
							: "opacity-[.5]"
					}  mt-5`}
				>
					<li>L123456789</li>
					<li>BLR</li>
					<li>KER</li>
					<li>
						<div className="bg-[#757C7C] text-white border rounded px-[5px] w-fit">
							Consignment Booked
						</div>
					</li>
					<li className="flex  justify-center items-center">
						<img
							src={actionBtn}
							className="w-[12px] h-[12px]"
							onClick={() => {
								navigate("/tracking");
							}}
						/>
					</li>
				</ul>
				<ul
					className={`flex justify-between p-[10px] bg-[#D9D9D9] ${
						props.selectedPie === 0 || props.selectedPie === null
							? "opacity-[1]"
							: "opacity-[.5]"
					}  mt-5`}
				>
					<li>L123456789</li>
					<li>BLR</li>
					<li>KER</li>
					<li>
						<div className="bg-[#757C7C] text-white border rounded px-[5px] w-fit">
							Consignment Booked
						</div>
					</li>
					<li className="flex  justify-center items-center">
						<img
							src={actionBtn}
							className="w-[12px] h-[12px]"
							onClick={() => {
								navigate("/tracking");
							}}
						/>
					</li>
				</ul>
				<ul
					className={`flex justify-between p-[10px] bg-[#D9D9D9] ${
						props.selectedPie === 1 || props.selectedPie === null
							? "opacity-[1]"
							: "opacity-[.5]"
					}  mt-5`}
				>
					<li>L123456789</li>
					<li>BLR</li>
					<li>KER</li>
					<li>
						<div className="bg-[#C38282] text-white border rounded px-[5px] w-fit">
							In Transit
						</div>
					</li>
					<li className="flex  justify-center items-center">
						<img
							src={actionBtn}
							className="w-[12px] h-[12px]"
							onClick={() => {
								navigate("/tracking");
							}}
						/>
					</li>
				</ul>
				<ul
					className={`flex justify-between p-[10px] bg-[#D9D9D9] ${
						props.selectedPie === 2 || props.selectedPie === null
							? "opacity-[1]"
							: "opacity-[.5]"
					}  mt-5`}
				>
					<li>L123456789</li>
					<li>BLR</li>
					<li>KER</li>
					<li>
						<div className="bg-[#5589C7] text-white border rounded px-[5px] w-fit">
							Out For Delivery
						</div>
					</li>
					<li className="flex  justify-center items-center">
						<img
							src={actionBtn}
							className="w-[12px] h-[12px]"
							onClick={() => {
								navigate("/tracking");
							}}
						/>
					</li>
				</ul>
				<ul
					className={`flex justify-between p-[10px] bg-[#D9D9D9] ${
						props.selectedPie === 3 || props.selectedPie === null
							? "opacity-[1]"
							: "opacity-[.5]"
					}  mt-5`}
				>
					<li>L123456789</li>
					<li>BLR</li>
					<li>KER</li>
					<li>
						<div className="bg-[#87A65F] text-white border rounded px-[5px] w-fit">
							Delivered Successfully
						</div>
					</li>
					<li className="flex  justify-center items-center">
						<img
							src={actionBtn}
							className="w-[12px] h-[12px]"
							onClick={() => {
								navigate("/tracking");
							}}
						/>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Table;
