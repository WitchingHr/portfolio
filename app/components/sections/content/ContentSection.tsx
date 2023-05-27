import React, { FC, PropsWithChildren } from "react";

// components
import HeadingInView from "./HeadingInView";

// props
interface ContentSectionProps {
  title: string;
	id: string;
	scrollRef: React.RefObject<HTMLDivElement>;
}

// ContentSection:
// container for content
const ContentSection: FC<PropsWithChildren<ContentSectionProps>> = ({ title, id, scrollRef, children }) => {
	return (
		<div ref={scrollRef} className="relative" id={id}>
			{/* stickied heading */}
			<div className="sticky overflow-visible text-white top-0 z-40 !pt-[60px] md:!pt-[88px] !pb-0 sm-section-container md:section-container w-full bg-black">
				<HeadingInView>{title}</HeadingInView>
			</div>
      {children}
		</div>
	);
};

export default ContentSection;
