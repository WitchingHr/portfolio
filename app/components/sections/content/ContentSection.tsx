"use client";

import HeadingInView from "./HeadingInView";

// props
interface ContentSectionProps {
	title: string;
	id: string;
	children: React.ReactNode;
}

// ContentSection
// container for content sections, has a sticky heading
const ContentSection: React.FC<ContentSectionProps> = ({
	title,
	id,
	children,
}) => {
	return (
		<div className="relative" id={id}>
			{/* stickied heading */}
			<div className="sticky overflow-visible text-white top-0 z-40 !pt-[60px] md:!pt-[88px] !pb-0 sm-section-container md:section-container w-full bg-black">
				<HeadingInView>{title}</HeadingInView>
			</div>
			{children}
		</div>
	);
};

export default ContentSection;
