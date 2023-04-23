import React, { FC, PropsWithChildren } from "react";

// HoverLink component:
// adds a hover effect to its children
const HoverLink: FC<PropsWithChildren> = ({ children }) => {
	// Render:
	return <span className="cursor-pointer hover-link">{children}</span>;
};

export default HoverLink;
