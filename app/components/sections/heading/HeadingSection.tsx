"use client";

import Fade from "./Fade";

// props
interface HeadingSectionProps {
	children: React.ReactNode;
}

// Section
// main section component
// shows heading that fades in
const HeadingSection: React.FC<HeadingSectionProps> = ({ children }) => {
	return (
		<section
			className="relative z-40 flex flex-col items-center justify-center h-screen text-center text-white perspective sm-section-container md:section-container"
		>
			<Fade>{children}</Fade>
		</section>
	);
};

export default HeadingSection;
