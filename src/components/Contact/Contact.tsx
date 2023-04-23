import React, { FC } from "react";

// Components:
import Fade from "../sections/heading/Fade";

// Contact component:
// contains contact information
// and a form to send me an email
const Contact: FC = () => {
	// Render:
	return (
		<section
			id="contact"
			className="flex flex-col items-center justify-center h-screen text-center text-white perspective snap-start snap-mandatory section-container"
		>
			<Fade>
				<h1 className="text-6xl font-bold">Contact</h1>
				<h2 className="text-2xl">Coming Soon</h2>
			</Fade>
		</section>
	);
};

export default Contact;
