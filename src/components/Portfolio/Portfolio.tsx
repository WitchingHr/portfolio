import React, { FC } from "react";

// Components:
import Project from "./Project";
import ContentSection from "../sections/content/ContentSection";

// Assets:
import aty1 from "../../assets/ATY_1.png";
import aty2 from "../../assets/ATY_2.png";
import ds1 from "../../assets/DS_1.png";
import ds2 from "../../assets/DS_2.png";

// PropTypes:
interface PortfolioProps {
	scrollRef: React.RefObject<HTMLElement>;
}

// Portfolio component:
// contains a list of projects
const Portfolio: FC<PortfolioProps> = ({ scrollRef }) => {
	// Render:
	return (
		<ContentSection title="Portfolio">
			{/* Project 1 */}
			<section
				ref={scrollRef}
				className="flex z-0 flex-col items-center h-screen !pt-[88px] text-center text-white perspective snap-start section-container"
			>
				<Project
					title={"AT Your Service - Professional Painting"}
					subtitle={"Professional Website for Small Painting Business"}
					tech={"React, TypeScript, Firebase, Framer Motion, Vite, Vitest"}
					date={"April 2023"}
					code={"http://github.com/witchinghr"}
					live={"http://atyourservice603.com"}
					img1={aty1}
					img2={aty2}
				>
					<>
						Professional website for a small business client, which features an
						engaging showcase of images, comprehensive business information, and
						a contact form to facilitate communication with potential customers.
					</>
				</Project>
			</section>

			{/* Project 2 */}
			<section className="flex z-0 flex-col h-screen items-center !pt-[88px] text-center text-white perspective snap-start section-container">
				<Project
					title={"Dreaming Spanish"}
					subtitle={"Dreaming Spanish clone"}
					tech={"React, TypeScript, NextJS"}
					date={"April 2023"}
					code={"https://github.com/WitchingHr/dreaming-spanish-clone"}
					live={"https://github.com/WitchingHr/dreaming-spanish-clone"}
					img1={ds1}
					img2={ds2}
				>
					<>
						Faithful reproduction of the language learning platform,
						Dreaming Spanish. The clone mimics the layout, design, and
						functionality of the original website, including its responsive
						design for mobile devices.
					</>
				</Project>
			</section>
		</ContentSection>
	);
};

export default Portfolio;
