import React, { FC } from "react";
import { motion } from "framer-motion";
import Github from "./Github";
import Linkedin from "./Linkedin";
import Discord from "./Discord";

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

// Window:
// renders a browser window
const Window: FC<WindowProps> = ({ activeTab }) => {
	return (
		<motion.div
			key={activeTab}
			variants={variants}
			initial="hidden"
			animate="visible"
			className="flex flex-col flex-1 rounded-b-md"
		>
			{activeTab === 1 && <Github />}
			{activeTab === 2 && <Linkedin />}
			{activeTab === 3 && <Discord />}
		</motion.div>
	);
};

export default Window;
