import React, { FC } from "react";

// components
import Project from "./Project";
import ContentSection from "../sections/content/ContentSection";

// props
interface PortfolioProps {
	scrollRef: React.RefObject<HTMLElement>;
}

// Portfolio:
// contains a list of projects with links to code and live sites
const Portfolio: FC<PortfolioProps> = ({ scrollRef }) => {
	return (
		<ContentSection title="Portfolio" id="portfolio">
			<section className="z-0 flex flex-col items-center gap-24 text-center text-white section-container">
				<Project
					title={"Facebook"}
					subtitle={"Facebook clone"}
					tech={
						"React, TypeScript, NextJS, Prisma, TailwindCSS, NextAuth, MongoDB"
					}
					date={"May 2023"}
					code={"http://github.com/witchinghr/fb"}
					live={"https://fb-witchinghr.vercel.app/"}
					img1={"/images/FB2.png"}
					img2={"/images/FB1.png"}
				>
					<>
						A meticulously replicated Facebook interface that supports essential
						features including user authentication, friending capabilities, post
						creation, photo uploads, engagement with posts via likes and
						comments, profile customization, and a dark mode option for enhanced
						user experience.
					</>
				</Project>

				<Project
					title={"Airbnb"}
					subtitle={"Airbnb clone"}
					tech={
						"React, TypeScript, NextJS, Prisma, TailwindCSS, NextAuth, MongoDB"
					}
					date={"May 2023"}
					code={"http://github.com/witchinghr/airbnb"}
					live={"https://abnb-clone-jade.vercel.app/"}
					img1={"/images/ABB1.png"}
					img2={"/images/ABB2.png"}
				>
					<>
						Faithful replica of Airbnb, featuring user authentication and
						enabling users to post and favorite property listings. It
						incorporates search functionality for tailored accommodation
						listings and facilitates a seamless reservation management system
						for bookings.
					</>
				</Project>

				<Project
					title={"AT Your Service - Professional Painting"}
					subtitle={"Professional Website for Small Painting Business"}
					tech={"React, TypeScript, Firebase, Framer Motion, Vite"}
					date={"April 2023"}
					code={"http://github.com/witchinghr"}
					live={"http://atyourservice603.com"}
					img1={"/images/AT1.png"}
					img2={"/images/AT2.png"}
				>
					<>
						Professional website for a small business client, which features an
						engaging showcase of images, comprehensive business information, and
						a contact form to facilitate communication with potential customers.
					</>
				</Project>

				<Project
					title={"Dreaming Spanish"}
					subtitle={"Dreaming Spanish clone"}
					tech={"React, TypeScript, NextJS"}
					date={"April 2023"}
					code={"https://github.com/WitchingHr/dreaming-spanish-clone"}
					live={"https://github.com/WitchingHr/dreaming-spanish-clone"}
					img1={"/images/DS1.png"}
					img2={"/images/DS2.png"}
				>
					<>
						Faithful reproduction of the language learning platform, Dreaming
						Spanish. The clone mimics the layout, design, and functionality of
						the original website, including its responsive design for mobile
						devices.
					</>
				</Project>
			</section>
		</ContentSection>
	);
};

export default Portfolio;
