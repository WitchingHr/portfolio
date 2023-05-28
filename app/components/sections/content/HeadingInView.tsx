"use client"

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// animation variants
const variants = {
	// increase hr width
	hidden: { width: "0%" },
	visible: { width: "100%", transition: { duration: 0.5 } },
};

interface HeadingInViewProps {
	children: React.ReactNode;
}

// HeadingInView:
// animates heading and hr as they enter viewport
const HeadingInView: React.FC<HeadingInViewProps> = ({ children }) => {

	// ref to track when element is in view
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.3 });

	// animation controls
	const controls = useAnimation();
	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
		if (!isInView) {
			controls.start("hidden");
		}
	}, [isInView, controls]);

	return (
		<div ref={ref}>
			{/* section heading */}
			<h1 className="mr-auto text-6xl font-bold">{children}</h1>

			{/* hr */}
			<motion.div initial="hidden" animate={controls} variants={variants}>
				<hr className="opacity-1 border-0 hr-gradient h-[2px]"></hr>
			</motion.div>
		</div>
	);
};

export default HeadingInView;
