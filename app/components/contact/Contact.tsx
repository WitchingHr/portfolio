"use client"

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import ContentSection from "../sections/content/ContentSection";
import Browser from "./browser/Browser";


// Contact:
// contact information section
const Contact = () => {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []);

	return (
		<ContentSection scrollRef={scrollRef} title="Contact" id="contact">
			<section
				className="z-0 flex flex-col items-center text-center text-white sm-contact-section md:contact-section sm-section-container md:section-container perspective"
			>
				<motion.div
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.5 }}
					className="flex flex-col items-start mr-auto text-left"
				>
					{/* email */}
					<a href="mailto:matt.thomas.developer@gmail.com">
						<h1 className="flex flex-wrap w-full text-lg font-semibold text-left xs:text-xl md:text-3xl lg:text-4xl gradient">
							<span>MATT.THOMAS.DEVELOPER</span>
							<span>@GMAIL.COM</span>
						</h1>
					</a>
					
					{/* subheading */}
					<h2 className="text-lg text-left text-white text-opacity-50 xs:text-2xl md:text-3xl">
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
