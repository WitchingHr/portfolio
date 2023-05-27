"use client"

// components
import Fade from "./Fade";

// props
interface HeadingSectionProps {
	scrollRef: React.RefObject<HTMLElement>;
	id?: string;
	children: React.ReactNode;
}

// Section:
// main section component
// shows heading that can be clicked on to show content
const HeadingSection: React.FC<HeadingSectionProps> = ({
	scrollRef,
	id,
	children,
}) => {

	return (
		<section
			id={id}
			ref={scrollRef}
			className="relative z-40 flex flex-col items-center justify-center h-screen text-center text-white perspective sm-section-container md:section-container"
		>
			<Fade>{children}</Fade>
		</section>
	);
};

export default HeadingSection;
