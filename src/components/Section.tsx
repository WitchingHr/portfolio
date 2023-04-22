import React, { FC, PropsWithChildren } from "react";
import Fade from "./Fade";

interface SectionProps {
	scrollRef: React.RefObject<HTMLElement>;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
	scrollRef,
	children,
}) => {
	return (
		<section
			ref={scrollRef}
			className="relative z-40 flex flex-col items-center justify-center h-screen text-center text-white perspective snap-start section-container"
		>
			<Fade>{children}</Fade>
		</section>
	);
};

export default Section;
