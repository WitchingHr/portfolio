"use client"

import Image from "next/image";

// Linkedin:
// renders a browser window with a LinkedIn profile
const Linkedin = () => {
	return (
		<div className="flex flex-col flex-1 gap-4 p-4 md:p-6 md:gap-8 md:flex-row rounded-b-md browser-gradient">
			<div className="flex flex-row items-center w-1/5 gap-4 md:gap-0 md:items-start md:flex-col">
				{/* profile pic */}
				<a
					href="http://linkedin.com/in/WitchingHr"
					target="_blank"
					className="relative w-[70px] md:w-full max-w-[200px] h-[70px] md:h-auto aspect-square"
				>
					<Image
						src={"/images/linkedin.jpeg"}
						alt="linkedIn profile picture"
						fill
						className="rounded-[50%] object-cover"
					/>
				</a>

				{/* name, job title, location */}
				<div className="flex flex-col whitespace-nowrap">
					<h2 className="mt-2 text-lg font-bold text-left">Matt Thomas</h2>
					<p className="text-lg text-left text-gray-500">Web Developer</p>
					{/* location */}
					<p className="hidden mt-2 text-xs text-left break-words whitespace-normal md:block">
						Merrimack, New Hampshire<br></br>United States
					</p>
				</div>
			</div>

			<div className="flex flex-col flex-1">
				{/* about */}
				<div className="flex flex-col gap-4 p-2 border border-gray-600 rounded-md md:p-4">
					{/* header and bio */}
					<div>
						<h2 className="font-bold text-left">About</h2>
						<p className="mt-1 text-sm text-left">
							As a diligent and proficient Full Stack Developer, I place
							paramount importance on delivering superior quality work. My
							inherent enthusiasm for continuous learning and advancement
							underpins my approach to all professional endeavors. Highly
							organized, I pride myself on writing clean, comprehensible code,
							ensuring efficient and maintainable solutions. I&#39;m adept at
							resolving complex problems, driven by a commitment to exceed
							project expectations. Complementing these technical skills is my
							collaborative nature, making me a reliable and congenial team
							member.
						</p>
					</div>

					{/* top skills */}
					<div className="flex flex-col flex-1 p-2 border border-gray-600 rounded-md md:p-4">
						<div className="flex flex-row gap-2">
							<svg
								className="shrink-0"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="white"
								width="24"
								height="24"
								focusable="false"
							>
								<path d="M7.6 4.4L6 .5 4.4 4.4.5 6l3.9 1.6L6 11.5l1.6-3.9L11.5 6zM19.6 8.4L18 4.5l-1.6 3.9-3.9 1.6 3.9 1.6 1.6 3.9 1.6-3.9 3.9-1.6zM11.6 16.4L10 12.5l-1.6 3.9L4.5 18l3.9 1.6 1.6 3.9 1.6-3.9 3.9-1.6z"></path>
							</svg>
							<div>
								<h2 className="font-bold text-left">Top Skills</h2>
								<ul className="flex flex-wrap gap-1 mt-1 text-sm">
									<li>TypeScript</li>
									<li>•</li>
									<li>React</li>
									<li>•</li>
									<li>NextJS</li>
									<li>•</li>
									<li>Node</li>
									<li>•</li>
									<li>Express</li>
									<li>•</li>
									<li>Tailwind</li>
									<li>•</li>
									<li>Prisma</li>
									<li>•</li>
									<li>Jest</li>
									<li>•</li>
									<li>Git</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Linkedin;
