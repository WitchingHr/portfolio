"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// animation variants
const commitVariants = {
	// dark green to light green
	initial: {
		backgroundColor: "#161B22",
	},
	final: {
		backgroundColor: "#39d353",
	},
};

// props
interface CommitProps {
	commits: Array<null>;
}

// Commits
// renders a grid of commits
// 182 commits for mobile, 364 for desktop
const Commits: React.FC<CommitProps> = ({ commits }) => {
	// state for triggering re-render on window resize
	const [mobile, setMobile] = useState<boolean>(false);

	// ref to track window width
	const windowRef = useRef<number>(window.innerWidth);

	// update window width on resize and mount
	useEffect(() => {
		windowRef.current = window.innerWidth;

		// set mobile state on mount
		if (windowRef.current < 768) {
			setMobile(true);
		}

		// set mobile state on resize
		const handleResize = () => {
			windowRef.current = window.innerWidth;

			if (windowRef.current < 768) {
				setMobile(true);
			}

			if (windowRef.current > 768) {
				setMobile(false);
			}
		};

		// event listener for window resize
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// ref to track when element is in view
	const commitsRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(commitsRef, { amount: 0.5, once: true });

	return (
		<div ref={commitsRef} className="w-full">
			<p className="ml-2 mr-auto text-sm text-left text-gray-600 md:ml-4">
				contributions in the last year
			</p>
			{isInView && (
				<div
					className={`w-full gap-[2px] p-2 border border-gray-600 rounded-md ${
						mobile ? "half-commits" : "commits"
					}`}
				>
					{commits.map((item, index) => {
						if (mobile && index > 129) return null;
						
						return (
							<motion.div
								variants={commitVariants}
								initial="initial"
								animate="final"
								transition={{
									duration: 3,
									delay: Math.floor(Math.random() * 10) + 1 * 0.5,
									repeat: Infinity,
									repeatType: "reverse",
								}}
								key={index}
								className="border border-black rounded-[25%] aspect-square"
							></motion.div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default Commits;
