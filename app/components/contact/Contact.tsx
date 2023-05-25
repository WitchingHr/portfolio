import { motion } from "framer-motion";

import ContentSection from "../sections/content/ContentSection";
import Browser from "./browser/Browser";

// Contact:
// contact information section
const Contact = () => {
	return (
		<ContentSection title="Contact" id="contact">
			<section
				className="z-0 flex flex-col items-center text-center text-white contact-section snap-start section-container perspective"
			>

				<motion.div
					initial={{ opacity: 0, x: 1000 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					className="flex flex-col items-start mr-auto text-left"
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
