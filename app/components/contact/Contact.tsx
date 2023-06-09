"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import ContentSection from "../sections/content/ContentSection";
import Browser from "./browser/Browser";

// Contact
// contact information section
const Contact = () => {
	// ref to track when element is in view
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.8, once: true });

	return (
		<ContentSection title="Contact" id="contact">
			<motion.section
				ref={sectionRef}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="z-0 flex flex-col items-center w-full h-screen max-h-screen text-center text-white sm-contact-section md:contact-section sm-section-container md:section-container"
			>
				<div className="flex flex-col items-start mr-auto text-left">
					{/* email */}
					<a href="mailto:matt.thomas.developer@gmail.com">
						<h1 className="flex flex-wrap w-full text-lg font-semibold text-left xs:text-xl md:text-3xl lg:text-4xl gradient">
							<span>MATT.THOMAS.DEVELOPER</span>
							<span>@GMAIL.COM</span>
						</h1>
					</a>

					{/* subheading */}
					{/* <h2 className="text-lg text-left text-white text-opacity-50 xs:text-2xl md:text-3xl">
						Reach out for collaboration or just to chat!
					</h2> */}
				</div>

				{/* browser */}
				{isInView && <Browser />}
			</motion.section>
		</ContentSection>
	);
};

export default Contact;
