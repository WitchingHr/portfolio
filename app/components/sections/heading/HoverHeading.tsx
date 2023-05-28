"use client";

// props
interface HoverHeadingProps {
	alt: string;
	sub: string;
	children: React.ReactNode;
}

// HoverHeading:
// animates a heading and subheading on hover
const HoverHeading: React.FC<HoverHeadingProps> = ({ alt, sub, children }) => {
	return (
		// blur out heading and subheading on click
		<div tabIndex={0} className="hover-heading blur-in">
			{/* heading */}
			<h1 className="text-6xl font-bold" data-replace={alt}>
				<span>{children}</span>
			</h1>

			{/* subheading */}
			<h2 className="text-2xl duration-500 hover-blur gradient">{sub}</h2>
		</div>
	);
};

export default HoverHeading;
