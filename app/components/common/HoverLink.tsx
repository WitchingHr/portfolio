"use client"

interface HoverLinkProps {
	children: React.ReactNode;
}
// HoverLink component:
// adds a hover animation to its children
const HoverLink: React.FC<HoverLinkProps> = ({ children }) => {
	// Render:
	return <span className="cursor-pointer hover-link">{children}</span>;
};

export default HoverLink;
