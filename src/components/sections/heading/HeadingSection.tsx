import React, { FC, PropsWithChildren } from "react";

// Components:
import Fade from "./Fade";

// PropTypes:
interface HeadingSectionProps {
	scrollRef: React.RefObject<HTMLElement>;
}

// Section component:
// main section component
const HeadingSection: FC<PropsWithChildren<HeadingSectionProps>> = ({
	scrollRef,
	children,
}) => {

	// Render:
	return (
		<section
			ref={scrollRef}
			className="relative z-40 flex flex-col items-center justify-center h-screen text-center text-white perspective snap-start section-container"
		>
			<Fade>{children}</Fade>
		</section>
	);
};

export default HeadingSection;
