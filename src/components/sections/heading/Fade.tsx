import React, { FC, PropsWithChildren, useRef } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

// Fade component:
// fades children in and out as they scroll into view
const Fade: FC<PropsWithChildren> = ({ children }) => {
	// Ref to track scroll:
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref });

	// Animations:
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.33, 0.66, 1],
		[0, 1, 1, 0]
	);

	const scale = useTransform(
		scrollYProgress,
		[0, 0.33, 0.66, 1],
		[1.5, 1, 1, 1.5]
	);

	const rotateX = useTransform(
		scrollYProgress,
		[0, 0.33, 0.66, 1],
		[-45, 0, 0, 45]
	);

	// Render:
	return (
		<motion.div ref={ref} style={{ opacity, scale, rotateX }}>
			{children}
		</motion.div>
	);
};

export default Fade;
