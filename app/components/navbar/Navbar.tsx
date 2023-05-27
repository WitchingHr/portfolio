import Link from "next/link";

// components
import HoverLink from "../common/HoverLink";

// Navbar:
// navigation header
const Navbar = () => {

	return (
		<header
			className="fixed items-start top-0 h-[60px] md:h-[88px] z-50 left-[50%] translate-x-[-50%]
			header-gradient flex flex-row flex-wrap justify-between w-screen text-xl text-white sm-section-container md:section-container"
		>
			<Link href='/' className="mr-8 font-bold">
				WitchingHr<span className="gradient2">.dev</span>
			</Link>
			
			<div className="hidden xs:block">
				<Link href='/#portfolio' className="mr-8">
					<HoverLink>Portfolio</HoverLink>
				</Link>

				<Link href='/#contact'>
					<HoverLink>Contact</HoverLink>
				</Link>
			</div>

		</header>
	);
};

export default Navbar;
