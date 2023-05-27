"use client"

import { useRef, useState } from "react";
import { motion } from "framer-motion";

import Tab from "./Tab";
import AddressBar from "./AddressBar";
import Window from "./window/Window";
import Image from "next/image";

import arrow from "../../../assets/svg/arrow.svg";

// animation variants
const variants = {
	hidden: {
		opacity: 0,
		rotateX: 270,
	},
	// fade and rotate in with perspective
	visible: {
		opacity: 1,
		rotateX: 360,
	},
	mobileHidden: {
		opacity: 0,
		y: 200,
	},
	mobileVisible: {
		opacity: 1,
		y: 0,
	},
};

// Browser:
// renders a browser window with tabs and an address bar
const Browser = () => {
	const [activeTab, setActiveTab] = useState<number>(1);

	const mobileRef = useRef<boolean>(window.innerWidth < 768);

	return (
		<motion.div
			variants={variants}
			initial={mobileRef.current ? "mobileHidden" : "hidden"}
			animate={mobileRef.current ? "mobileVisible" : "visible"}
			transition={{ duration: 0.7, delay: 1 }}
			className="flex flex-col flex-1 w-full mx-6 mt-6 border border-gray-600 rounded-md parallax bg-slate-950"
		>
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
					</div>

					{/* arrow */}
					<Image src={arrow} alt="" className="hidden mx-2 scale-75 xs:block" />
					
				</div>
				<AddressBar activeTab={activeTab} />

				{/* content will go here */}
				<Window activeTab={activeTab} />

		</motion.div>
	);
};

export default Browser;
