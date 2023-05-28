"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import HoverLink from "../common/HoverLink";
import Arrow from "../common/Arrow";

// animation variants
const variants = {
	// slide in from bottom and fade in from grayscale to color
	hidden: { opacity: 0, y: 200, filter: "grayscale(100%)" },
	visible: { opacity: 1, y: 0, filter: "grayscale(0%)" },
};

// props
interface ProjectProps {
	title: string;
	subtitle: string;
	tech: string;
	date: string;
	code: string;
	live: string;
	img1: string;
	img2: string;
	children: React.ReactNode;
}

// Project:
// displays project information and images
const Project: React.FC<ProjectProps> = ({
	title,
	subtitle,
	tech,
	date,
	code,
	live,
	img1,
	img2,
	children,
}) => {
	// image state for hover effect
	const [showBottomImage, setShowBottomImage] = useState(false);

	// opacity styles for images based on hover state
	const topStyle = showBottomImage ? "opacity-0" : "opacity-100";
	const bottomStyle = showBottomImage ? "opacity-100" : "opacity-0";

	// ref to track when project is in view for animation
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={variants}
			transition={{ duration: 0.5, ease: "easeOut" }}
		>
			<div className="flex flex-col h-full">
				{/* project title and subheading */}
				<div>
					<h1 className="text-4xl font-semibold text-left gradient">{title}</h1>
					<h2 className="text-3xl text-left text-white text-opacity-50">
						{subtitle}
					</h2>
				</div>

				{/* flex container for images and project info */}
				<div className="flex flex-col gap-8 mt-6 mb-auto xl:flex-row">
					{/* image container, links to live preview */}
					<div className="min-w-[55%] flex flex-col">
						<a
							href={live}
							target="_blank"
							onMouseOver={() => setShowBottomImage(true)}
							onMouseOut={() => setShowBottomImage(false)}
							className="relative h-auto my-auto aspect-video"
						>
							{/* top image */}
							<Image
								src={img1}
								alt="screenshot of project"
								fill
								className={`object-cover rounded-md duration-300 ` + topStyle}
							/>
							{/* top image blurred, sits behind image to create blur effect */}
							<Image
								src={img1}
								alt=""
								fill
								aria-hidden="true"
								className={
									"absolute -z-10 image-blur object-cover rounded-md duration-300 " +
									topStyle
								}
							/>
							{/* bottom image */}
							<Image
								src={img2}
								alt=""
								fill
								aria-hidden="true"
								className="absolute object-cover rounded-md -z-20"
							/>
							{/* bottom image blurred, sits behind image to create blur effect */}
							<Image
								src={img2}
								alt=""
								fill
								aria-hidden="true"
								className={
									"absolute object-cover rounded-md -z-30 image-blur duration-300 " +
									bottomStyle
								}
							/>
						</a>
					</div>

					{/* project information */}
					<div className="flex flex-col justify-between gap-6">
						{/* summary */}
						<div>
							<h2 className="text-4xl font-semibold text-left">Summary</h2>
							<p className="text-xl font-light text-left text-white text-opacity-50">
								{children}
							</p>
						</div>

						{/* flex container for stack and date */}
						<div className="flex flex-row gap-6">
							{/* tech stack */}
							<div className="flex-1">
								<h2 className="text-2xl font-semibold text-left">
									Technologies
								</h2>
								<p className="text-xl font-light text-left text-white text-opacity-50">
									{tech}
								</p>
							</div>

							{/* date */}
							<div className="flex-1">
								<h2 className="text-2xl font-semibold text-left">Date</h2>
								<p className="text-xl font-light text-left text-white text-opacity-50">
									{date}
								</p>
							</div>
						</div>

						{/* project links */}
						<div className="flex flex-row gap-6">
							{/* github link */}
							<a
								href={code}
								target="_blank"
								className="flex flex-row items-center flex-1 gap-1 font-semibold text-left"
							>
								<HoverLink>
									<span className="text-2xl">GitHub</span>
								</HoverLink>
								<Arrow />
							</a>

							{/* live preview link */}
							<a
								href={live}
								target="_blank"
								className="flex flex-row items-center flex-1 gap-1 font-semibold text-left"
							>
								<HoverLink>
									<span className="text-2xl">Live Preview</span>
								</HoverLink>
								<Arrow />
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Project;
