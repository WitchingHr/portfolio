import React, { FC, PropsWithChildren, useRef } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

// Fade:
// fades children in and out as they scroll into view
const Fade: FC<PropsWithChildren> = ({ children }) => {

	// ref to track scroll
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref });

	// animations
	// fades out as the element nears the top or bottom of the screen
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.33, 0.66, 1],
		[0, 1, 1, 0]
	);

	// scales up as the element nears the top or bottom of the screen
	const scale = useTransform(
		scrollYProgress,
		[0, 0.33, 0.66, 1],
		[1.5, 1, 1, 1.5]
	);

	// tilt as the element nears the top or bottom of the screen
	const rotateX = useTransform(
		scrollYProgress,
		[0, 0.33, 0.66, 1],
		[-45, 0, 0, 45]
	);

	return (
		<motion.div ref={ref} style={{ opacity, scale, rotateX }}>
			{children}
		</motion.div>
	);
};

export default Fade;
