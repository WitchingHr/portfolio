import React, { FC } from "react";
import { motion } from "framer-motion";

// Components:
import ContentSection from "../sections/content/ContentSection";
import Browser from "./Browser/Browser";

// PropTypes:
interface ContactProps {
	scrollRef: React.RefObject<HTMLElement>;
}

// Contact component:
// contains contact information
const Contact: FC<ContactProps> = ({ scrollRef }) => {
	// Render:
	return (
		<ContentSection title="Contact">
			<section
				ref={scrollRef}
				className="flex z-0 flex-col items-center h-screen !pt-[88px] text-center text-white snap-start section-container"
			>
				{/* Email */}
				<motion.div
					initial={{ opacity: 0, x: 1000 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="mt-[88px] mr-auto"
				>
					<a href="mailto:matt.thomas.developer@gmail.com">
						<h1 className="text-4xl font-semibold text-left gradient">MATT.THOMAS.DEVELOPER@GMAIL.COM</h1>
					</a>
					<h2 className="text-3xl text-left text-white text-opacity-50">
						Reach out for collaboration or just to chat!
					</h2>
				</motion.div>
				<Browser />
			</section>
		</ContentSection>
	);
};

export default Contact;
