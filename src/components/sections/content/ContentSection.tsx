import React, { FC, PropsWithChildren } from "react";

// Components:
import HeadingInView from "./HeadingInView";

//PropTypes:
interface ContentSectionProps {
  title: string;
}

// ContentSection component:
// container for content
const ContentSection: FC<PropsWithChildren<ContentSectionProps>> = ({ title, children }) => {
	// Render:
	return (
		<div className="relative">
			{/* Stickied Header */}
			<div className="sticky overflow-visible text-white top-0 z-40 !pt-[88px] !pb-0 section-container w-full bg-black">
				<HeadingInView>{title}</HeadingInView>
			</div>
      {children}
		</div>
	);
};

export default ContentSection;
