import React, { FC } from "react";
import { motion } from "framer-motion";

// components
import ContentSection from "../sections/content/ContentSection";
import Browser from "./Browser/Browser";

// props
interface ContactProps {
	scrollRef: React.RefObject<HTMLElement>;
}

// Contact:
// contact information section
const Contact: FC<ContactProps> = ({ scrollRef }) => {
	return (
		<ContentSection title="Contact" id="contact">
			<section
				ref={scrollRef}
				className="flex z-0 flex-col items-center h-screen !pt-[88px] text-center text-white snap-start section-container perspective"
			>

				<motion.div
					initial={{ opacity: 0, x: 1000 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="mt-[88px] mr-auto"
				>
					{/* email */}
					<a href="mailto:matt.thomas.developer@gmail.com">
						<h1 className="text-4xl font-semibold text-left gradient">MATT.THOMAS.DEVELOPER@GMAIL.COM</h1>
					</a>
					
					{/* subheading */}
					<h2 className="text-3xl text-left text-white text-opacity-50">
						Reach out for collaboration or just to chat!
					</h2>
				</motion.div>

				{/* browser */}
				<Browser />

			</section>
		</ContentSection>
	);
};

export default Contact;
