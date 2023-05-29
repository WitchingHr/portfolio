"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

// props
interface FadeProps {
	children: React.ReactNode;
}

// Fade
// animates children as they near the top or bottom of the screen
const Fade: React.FC<FadeProps> = ({ children }) => {

	// ref to track scroll
	const scrollRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: scrollRef });

	// animations
	// fades out as the element nears the top or bottom of the screen
	const opacity = useTransform(
		scrollYProgress,
		[0, 0.33, 0.66, 1],
		[0, 1, 1, 0]
	);

	return (
		<motion.div
			ref={scrollRef}
			style={{ opacity }}
		>
			{children}
		</motion.div>
	);
};

export default Fade;
