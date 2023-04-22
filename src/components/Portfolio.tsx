import React, { FC, useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import Project from "./Project";

import aty1 from "../assets/ATY_1.png";
import aty2 from "../assets/ATY_2.png";

interface PortfolioProps {
	scrollRef: React.RefObject<HTMLElement>;
}

const Portfolio: FC<PortfolioProps> = ({ scrollRef }) => {
	const [height, setHeight] = useState<number>(0);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollContainerRef.current) {
			setHeight(scrollContainerRef.current.clientHeight);
		}
	}, [height]);

	const projectOneRef = useRef<HTMLDivElement>(null);
	const projectTwoRef = useRef<HTMLDivElement>(null);
	const isInViewOne = useInView(projectOneRef, { margin: "-50%" });
	const isInViewTwo = useInView(projectTwoRef, { margin: "-50%" });
	const viewStyle = "!opacity-100";

	const handleScroll = (Ref: React.RefObject<HTMLDivElement>) => {
		if (Ref.current) {
			Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<section
			ref={scrollRef}
			className="flex z-0 flex-col items-center justify-center h-screen !pt-[88px] text-center text-white perspective snap-start section-container"
		>
			<h1 className="mr-auto text-6xl font-bold">Portfolio</h1>
			<hr className="opacity-50"></hr>
			<div
				ref={scrollContainerRef}
				className="relative flex flex-col w-full h-full overflow-y-scroll snap-y snap-mandatory blur-in"
			>
				<Project
					scrollRef={projectOneRef}
					height={height}
					delay={0}
					title={"AT Your Service - Professional Painting"}
					subtitle={"Professional Website for Small Painting Business"}
					tech={"React, TypeScript, Firebase, Framer Motion"}
					date={"April 2023"}
					code={"http://github.com/witchinghr"}
					live={"http://atyourservice603.com"}
					img1={aty1}
					img2={aty2}
				>
					<>
						Professional website for a small business client, which features an
						engaging showcase of images, comprehensive business
						information, and a contact form to facilitate communication with potential
						customers.
					</>
				</Project>

				<hr className="opacity-50"></hr>

				<Project
					scrollRef={projectTwoRef}
					height={height}
					delay={0.5}
					title={"AT Your Service - Professional Painting"}
					subtitle={"Professional Website for Small Painting Business"}
					tech={"React, TypeScript, Firebase, Framer Motion"}
					date={"April 2023"}
					img1={aty1}
					img2={aty2}
				>
					<>This is my summary....</>
				</Project>
			</div>
			<div className="absolute bottom-0 flex flex-row justify-center w-full gap-2 pb-[40px] footer-gradient">
				<span
					className={
						`cursor-pointer dot ` + (isInViewOne === true ? viewStyle : "")
					}
					onClick={() => handleScroll(projectOneRef)}
				></span>
				<span
					className={
						`cursor-pointer dot ` + (isInViewTwo === true ? viewStyle : "")
					}
					onClick={() => handleScroll(projectTwoRef)}
				></span>
			</div>
		</section>
	);
};

export default Portfolio;
