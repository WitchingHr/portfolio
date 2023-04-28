import React, { FC, PropsWithChildren, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Tab from "./Tab";
import AddressBar from "./AddressBar";

interface BrowserProps {}

const Browser: FC<PropsWithChildren<BrowserProps>> = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	return (
		<motion.div className="flex flex-col flex-1 w-full h-full mx-6 mt-6 mb-6 border border-gray-600 rounded-md parallax bg-slate-950"
			>
				{/* Tabs */}
				<div className="flex h-9">
					{/* Traffic lights */}
					<div className="flex items-center justify-center gap-1.5 px-6 pt-1">
						<div className="block w-2.5 h-2.5 rounded-full bg-slate-300"></div>
						<div className="block w-2.5 h-2.5 rounded-full bg-slate-300"></div>
						<div className="block w-2.5 h-2.5 rounded-full bg-slate-300"></div>
					</div>
					{/* Tabs */}
					<div className="flex mt-1.5">
						<Tab
							title="GitHub"
							id={1}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<Tab
							title="LinkedIn"
							id={2}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<Tab
							title="Discord"
							id={3}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<Tab
							title="Instagram"
							id={4}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					</div>
				</div>
				<AddressBar activeTab={activeTab} />
				{/* Content */}
		</motion.div>
	);
};

export default Browser;
