import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Animation variants:
const variants = {
	// Blur and fade in header:
	hidden: { opacity: 0, filter: "blur(200px)" },
	visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 1 } },
};
const variants2 = {
	// Increase hr width:
	hidden: { width: "0%" },
	visible: { width: "100%", transition: { duration: 0.5, delay: 1 } },
};

// HeadingInView component:
// animates header and hr as they scroll into view
const HeadingInView: FC<PropsWithChildren> = ({ children }) => {
	// Ref to track when element is in view:
	const ref = useRef(null);
	const isInView = useInView(ref, { amount: 0.5 });

	// Animation controls:
	const controls = useAnimation();
	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		} else {
			controls.start("hidden");
		}
	}, [isInView, controls]);

	// Render:
	return (
		<div ref={ref}>
			<motion.div initial="hidden" animate={controls} variants={variants}>
				<h1 className="mr-auto text-6xl font-bold">{children}</h1>
			</motion.div>

			<motion.div initial="hidden" animate={controls} variants={variants2}>
				<hr className="opacity-1 border-0 hr-gradient h-[2px]"></hr>
			</motion.div>
		</div>
	);
};

export default HeadingInView;
