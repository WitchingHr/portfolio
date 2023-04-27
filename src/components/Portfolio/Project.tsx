import React, { FC, PropsWithChildren, useState } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

// Components:
import HoverLink from "../common/HoverLink";

// Animation variants:
const variants = {
	// Slide in from right and fade in from grayscale to color:
	hidden: { opacity: 0, x: 1000, filter: "grayscale(100%)" },
	visible: { opacity: 1, x: 0, filter: "grayscale(0%)" },
};

// PropTypes:
interface ProjectProps {
	title: string;
	subtitle: string;
	tech: string;
	date: string;
	code: string;
	live: string;
	img1: StaticImageData;
	img2: StaticImageData;
}

// Project component:
// displays project information and images
const Project: FC<PropsWithChildren<ProjectProps>> = ({
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
	// Image state for hover effect:
	const [showBottomImage, setShowBottomImage] = useState(false);
	const topStyle = showBottomImage ? "opacity-0" : "opacity-100";
	const bottomStyle = showBottomImage ? "opacity-100" : "opacity-0";

	// Render:
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={variants}
			transition={{ duration: 1, ease: "easeOut" }}
		>
			<div className="flex flex-col gap-[20%] mt-[88px]">
				{/* Project Title and Subheading */}
				<div>
					<h1 className="text-4xl font-semibold text-left gradient">{title}</h1>
					<h2 className="text-3xl text-left text-white text-opacity-50">
						{subtitle}
					</h2>
				</div>

				<div className="flex flex-row gap-8 mt-6 mb-auto">
					{/* Project Images */}
					<a
						href={live}
						target="_blank"
						onMouseOver={() => setShowBottomImage(true)}
						onMouseOut={() => setShowBottomImage(false)}
						className="relative flex flex-col items-center justify-center w-[55%] shrink-0"
					>
						<Image src={img1} alt="" className={`rounded-md duration-300 ` + topStyle} />
						<Image
							src={img1}
							alt=""
							className={"absolute rounded-md -z-10 image-blur duration-300 " + topStyle}
						/>
						<Image src={img2} alt="" className="absolute rounded-md -z-20" />
						<Image
							src={img2}
							alt=""
							className={"absolute rounded-md -z-30 image-blur duration-300 " + bottomStyle}
						/>
					</a>

					{/* Project Information */}
					<div className="flex flex-col justify-between gap-6">
						<div>
							<h2 className="text-4xl font-semibold text-left">Summary</h2>
							<p className="text-xl font-light text-left text-white text-opacity-50">
								{children}
							</p>
						</div>
						<div className="flex flex-row gap-6">
							<div className="flex-1">
								<h2 className="text-2xl font-semibold text-left">
									Technologies
								</h2>
								<p className="text-xl font-light text-left text-white text-opacity-50">
									{tech}
								</p>
							</div>
							<div className="flex-1">
								<h2 className="text-2xl font-semibold text-left">Date</h2>
								<p className="text-xl font-light text-left text-white text-opacity-50">
									{date}
								</p>
							</div>
						</div>

						{/* Project Links */}
						<div className="flex flex-row gap-6">
							<a
								href={code}
								target="_blank"
								className="flex flex-row items-center flex-1 gap-1 font-semibold text-left"
							>
								<HoverLink>
									<span className="text-2xl">GitHub</span>
								</HoverLink>
								<svg
									className="opacity-50"
									stroke="currentColor"
									fill="none"
									strokeWidth="2"
									viewBox="0 0 24 24"
									strokeLinecap="round"
									strokeLinejoin="round"
									height="27"
									width="27"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line x1="7" y1="17" x2="17" y2="7"></line>
									<polyline points="7 7 17 7 17 17"></polyline>
								</svg>
							</a>
							<a
								href={live}
								target="_blank"
								className="flex flex-row items-center flex-1 gap-1 font-semibold text-left"
							>
								<HoverLink>
									<span className="text-2xl">Live Preview</span>
								</HoverLink>
								<svg
									className="opacity-50"
									stroke="currentColor"
									fill="none"
									strokeWidth="2"
									viewBox="0 0 24 24"
									strokeLinecap="round"
									strokeLinejoin="round"
									height="27"
									width="27"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line x1="7" y1="17" x2="17" y2="7"></line>
									<polyline points="7 7 17 7 17 17"></polyline>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Project;
