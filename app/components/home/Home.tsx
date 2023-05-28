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
				{/* <h1 className="text-6xl font-bold">
            Matt Thomas
          </h1>
          <h2 className="text-2xl gradient">Full Stack Developer</h2> */}
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
