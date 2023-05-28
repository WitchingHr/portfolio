"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

import Github from "./github/Github";
import Linkedin from "./Linkedin";
import Discord from "./discord/Discord";

// animation variants
const variants = {
	hidden: {
		opacity: 0,
	},
	// fade and rotate in with perspective
	visible: {
		opacity: 1,
		transition: {
			duration: 0.7,
		},
	},
};

// props
interface WindowProps {
	activeTab: number;
}

// Window
// renders a browser window
const Window: React.FC<WindowProps> = ({ activeTab }) => {
	// array of 364 nulls for github commits
	const commits = useMemo(() => new Array(364).fill(null), []);

	return (
		<motion.div
			key={activeTab}
			variants={variants}
			initial="hidden"
			animate="visible"
			className="flex flex-col flex-1 rounded-b-md"
		>
			{activeTab === 1 && <Github commits={commits} />}
			{activeTab === 2 && <Linkedin />}
			{activeTab === 3 && <Discord />}
		</motion.div>
	);
};

export default Window;
