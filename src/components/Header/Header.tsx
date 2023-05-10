import React, { FC } from "react";
import Link from "next/link";

// components
import HoverLink from "../common/HoverLink";

// props
interface HeaderProps {
	heroRef?: React.RefObject<HTMLElement>;
	portfolioRef?: React.RefObject<HTMLElement>;
	contactRef?: React.RefObject<HTMLElement>;
	fn?: (ref: React.RefObject<HTMLElement>) => void;
	page: string;
}

// Header:
// navigation header
const Header: FC<HeaderProps> = ({ heroRef, portfolioRef, contactRef, fn, page }) => {
	const style = page === 'home' ? 'fixed items-start' : 'absolute';

	return (
		<header className={`top-0 h-[88px] z-50 left-[50%] translate-x-[-50%] header-gradient flex flex-row flex-wrap justify-between w-screen text-xl text-white section-container ` + style}>
			
			{page === "home" ? (
				// scroll to top
				<button className="mr-8 font-bold" onClick={() => fn!(heroRef!)}>
					WitchingHr<span className="gradient2">.dev</span>
				</button>
			) : (
				// navigate to home page
				<Link href='/' className="mr-8 font-bold">
					WitchingHr<span className="gradient2">.dev</span>
				</Link>
			)}
			
			
			<div>
				{/* portfolio */}
				{page === "home" ? (
					// scroll to portfolio section
					<button onClick={() => fn!(portfolioRef!)} className="mr-8">
						<HoverLink>Portfolio</HoverLink>
					</button>
				) : (
					// navigate to portfolio page
					<Link href='/#portfolio' className="mr-8">
						<HoverLink>Portfolio</HoverLink>
					</Link>
				)}
				{/* contact */}
				{page === "home" ? (
					// scroll to contact section
					<button onClick={() => fn!(contactRef!)} className="mr-8">
						<HoverLink>Contact</HoverLink>
					</button>
				) : (
					// navigate to contact page
					<Link href='/#contact' className="mr-8">
						<HoverLink>Contact</HoverLink>
					</Link>
				)}
				{/* blog */}
				<Link href='/blog'>
					<HoverLink>Blog</HoverLink>
				</Link>
			</div>

		</header>
	);
};

export default Header;
