"use client";

import Image from "next/image";
import { useState } from "react";

import arrow from "../../../assets/svg/arrow.svg";

import Tab from "./Tab";
import AddressBar from "./address_bar/AddressBar";
import Window from "./window/Window";

// Browser
// renders a browser window with tabs and an address bar
const Browser = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	return (
		<div className="flex flex-col flex-1 w-full mx-6 mt-2 border border-gray-600 rounded-md bg-slate-950">
			{/* top row */}
			<div className="flex h-9">
				{/* traffic lights */}
				<div className="hidden xs:flex items-center justify-center gap-1.5 px-2 xs:px-4 sm:mx-2 pt-1 shrink">
					<div className="block w-2.5 h-2.5 rounded-full bg-slate-300"></div>
					<div className="block w-2.5 h-2.5 rounded-full bg-slate-300"></div>
					<div className="block w-2.5 h-2.5 rounded-full bg-slate-300"></div>
				</div>

				{/* tabs */}
				<div className="flex flex-1 mt-1.5 mx-1.5 xs:mx-0">
					<Tab
						title="GitHub"
						id={1}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						tabIndex={0}
					/>
					<Tab
						title="LinkedIn"
						id={2}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						tabIndex={1}
					/>
					<Tab
						title="Discord"
						id={3}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						tabIndex={2}
					/>
				</div>

				{/* arrow */}
				<Image src={arrow} alt="" className="hidden mx-2 scale-75 xs:block" />
			</div>

			{/* address bar */}
			<AddressBar activeTab={activeTab} />

			{/* pages */}
			<Window activeTab={activeTab} />
		</div>
	);
};

export default Browser;
