import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

// Fade
// animates children as they near the top or bottom of the screen
const Fade: React.FC<PropsWithChildren> = ({ children }) => {

	// for triggering re-render on window resize
	const [mobile, setMobile] = useState<boolean>(false);

	// ref to track window width
	const windowRef = useRef<number>(window.innerWidth);

	useEffect(() => {
		// get window width
		windowRef.current = window.innerWidth;

		// update window width on resize
		const handleResize = () => {
			windowRef.current = window.innerWidth;

			// check if mobile
			if (windowRef.current < 768) {
				// re-render
				setMobile(true);
			}

			// check if desktop
			if (windowRef.current > 768) {
				// re-render
				setMobile(false);
			}
		}

		// event listener
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

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

	// if mobile, fade in and out
	if (windowRef.current < 768) {
		return (
			<motion.div ref={ref} style={{ opacity }}>
				{children}
			</motion.div>
		);

	} else {
		// if desktop, fade in and out, scale up, and tilt
		return (
			<motion.div ref={ref} style={{ opacity, scale, rotateX }}>
				{children}
			</motion.div>
		);
	}
};

export default Fade;
