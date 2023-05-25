import React, { FC, PropsWithChildren } from "react";

// components
import HeadingInView from "./HeadingInView";

// props
interface ContentSectionProps {
  title: string;
	id: string;
}

// ContentSection:
// container for content
const ContentSection: FC<PropsWithChildren<ContentSectionProps>> = ({ title, id, children }) => {
	return (
		<div className="relative snap-start" id={id}>
			{/* stickied heading */}
			<div className="sticky overflow-visible text-white top-0 z-40 !pt-[88px] !pb-0 section-container w-full bg-black">
				<HeadingInView>{title}</HeadingInView>
			</div>
      {children}
		</div>
	);
};

export default ContentSection;
