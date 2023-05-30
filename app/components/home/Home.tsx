"use client";

import HeadingSection from "../sections/heading/HeadingSection";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import HoverHeading from "../sections/heading/HoverHeading";

// Home
// main page
const Home = () => {
	return (
		<main>
			{/* Hero: */}
			<HeadingSection>
				<HoverHeading alt="💪💪💪💪💪💪💪💪" sub="Full Stack Developer">
					Matt Thomas
				</HoverHeading>
			</HeadingSection>

			{/* portfolio */}
			<Portfolio />

			{/* contact */}
			<Contact />
		</main>
	);
};

export default Home;
