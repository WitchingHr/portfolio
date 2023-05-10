import React, { FC, PropsWithChildren, useState } from "react";

// props
interface HoverHeadingProps {
	sub: string;
	setViewSection: () => void;
}

// HoverHeading:
// animates a heading and subheading on hover
const HoverHeading: FC<PropsWithChildren<HoverHeadingProps>> = ({
	sub,
	setViewSection,
	children,
}) => {
	// state to activate animation
	const [active, setActive] = useState<boolean>(false);

	// set active to true and show content after 1 second
	const handleClick = () => {
		setActive(true);
		setTimeout(() => {
			setViewSection();
		}, 1000);
	};

	return (
		// blur out heading and subheading on click
		<div
			role="button"
			tabIndex={0}
			onClick={handleClick}
			className={
				`cursor-pointer hover-heading ` + (active === true && "blur-out")
			}
		>

			{/* heading */}
			<h1 className="text-6xl font-bold" data-replace={children}>
				<span>{children}</span>
			</h1>

			{/* subheading */}
			<h2 className="text-2xl duration-500 hover-blur gradient">{sub}</h2>
		</div>
	);
};

export default HoverHeading;
