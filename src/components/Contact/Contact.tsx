import React, { FC } from "react";
import { motion } from "framer-motion";

// Components:
import ContentSection from "../sections/content/ContentSection";

// PropTypes:
interface ContactProps {
	scrollRef: React.RefObject<HTMLElement>;
}

// Animation variants:
const variants = {
	hidden: { opacity: 0, y: 100 },
	visible: { opacity: 1, y: 0, transition: { duration: 1, staggerChildren: 0.2}},
};

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
				<motion.div
					variants={variants}
					initial="hidden"
					animate="visible"
					className="mt-[88px]"
				>
					<motion.div
						
					>
						<a href="mailto:matt.thomas.developer@gmail.com">
							<h1 className="text-4xl font-semibold text-left gradient">MATT.THOMAS.DEVELOPER@GMAIL.COM</h1>
						</a>
					</motion.div>
					<motion.a
						variants={variants}
						href="">GITHUB</motion.a>
					<motion.a
						variants={variants}
						href="">LINKEDIN</motion.a>
					<motion.a
						variants={variants}
						href="">LEETCODE</motion.a>
					<motion.a
						variants={variants}
						href="">DISCORD</motion.a>
				</motion.div>


			</section>
		</ContentSection>
	);
};

export default Contact;
