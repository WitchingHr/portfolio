import React, { FC, PropsWithChildren, useState } from "react";

// PropTypes:
interface HoverHeadingProps {
	sub: string;
	setViewSection: () => void;
}

// HoverHeading component:
// animates a heading and subheading on hover
const HoverHeading: FC<PropsWithChildren<HoverHeadingProps>> = ({
	sub,
	setViewSection,
	children,
}) => {
	// State to activate animation:
	const [active, setActive] = useState<boolean>(false);

	// Set active to true and call setViewSection after 1 second:
	const handleClick = () => {
		setActive(true);
		setTimeout(() => {
			setViewSection();
		}, 1000);
	};

	// Render:
	return (
		<div
			role="button"
			tabIndex={0}
			onClick={handleClick}
			className={
				`cursor-pointer hover-heading ` + (active === true && "blur-out")
			}
		>
			<h1 className="text-6xl font-bold" data-replace={children}>
				<span>{children}</span>
			</h1>
			<h2 className="text-2xl duration-500 hover-blur gradient">{sub}</h2>
		</div>
	);
};

export default HoverHeading;
