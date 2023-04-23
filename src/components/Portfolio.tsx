import React, { FC, useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import Project from "./Project";
import HeaderInView from "./HeaderInView";
import { motion, AnimatePresence } from "framer-motion";

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

	const handleScroll = (Ref: React.RefObject<HTMLDivElement>) => {
		if (Ref.current) {
			Ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	return (
		<div className="relative">
			<div className="sticky overflow-visible text-white top-0 z-40 pt-[88px] px-[8%] w-full bg-black">
				<HeaderInView>Portfolio</HeaderInView>
			</div>
			<section
				ref={scrollRef}
				className="flex z-0 flex-col items-center h-screen !pt-[88px] text-center text-white perspective snap-start section-container"
			>
				{/* <hr className="w-full opacity-50 mt-[88px]"></hr> */}
				<Project
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

			</section>
			<section
				className="flex z-0 flex-col h-screen items-center !pt-[88px] text-center text-white perspective snap-start section-container"
			>
				{/* <hr className="w-full opacity-50 mt-[88px]"></hr> */}
				<Project
					delay={0.5}
					title={"AT Your Service - Professional Painting"}
					subtitle={"Professional Website for Small Painting Business"}
					tech={"React, TypeScript, Firebase, Framer Motion"}
					date={"April 2023"}
					code={"http://github.com/witchinghr"}
					live={"http://atyourservice603.com"}
					img1={aty1}
					img2={aty2}
				>
					<>This is my summary....</>
				</Project>
			</section>
		</div>
	);
};

export default Portfolio;
