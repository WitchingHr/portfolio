"use client";

import Image from "next/image";

import Repo from "./Repo";
import Commits from "./Commits";

interface GithubProps {
	commits: Array<null>;
}

// Github:
// renders a github window
const Github: React.FC<GithubProps> = ({
	commits,
}) => {
	return (
		<div className="flex flex-col flex-1 gap-2 p-2 sm:gap-4 sm:p-4 md:gap-8 md:p-6 md:flex-row browser-gradient rounded-b-md">
			<div className="flex flex-row items-center w-1/5 gap-4 md:gap-0 md:items-start md:flex-col">
				{/* profile pic */}
				<a
					href="http://github.com/WitchingHr"
					target="_blank"
					className="relative w-[70px] md:w-full max-w-[200px] h-[70px] md:h-auto aspect-square"
				>
					<Image
						src={"/images/me.jpg"}
						alt="GitHub Profile picture"
						fill
						className="rounded-[50%] object-cover"
					/>
				</a>

				<div className="flex flex-col">
					{/* name and username */}
					<h2 className="mt-2 text-lg font-bold text-left whitespace-nowrap">
						Matt Thomas
					</h2>
					<p className="text-lg text-left text-gray-500 ">
						WitchingHr
					</p>

				</div>
			</div>

			<div className="flex flex-col items-center flex-1 gap-2 sm:gap-4">
				{/* readme */}
				<div className="flex flex-col w-full gap-1 p-2 border border-gray-600 rounded-md md:p-4">
					<p className="text-xs text-left text-gray-600">
						WitchingHr/README.md
					</p>
					<h2 className="text-left">Hey! 👋</h2>
					<p className="text-sm text-left">
						Welcome to my portfolio!<br></br>Click the URLs in the address bar
						to find me on social media
					</p>
				</div>

				{/* commits */}
				<Commits commits={commits} />

				<div className="flex flex-col w-full gap-2 sm:gap-4 md:flex-row">
					{/* pinned repos */}
					<Repo
						title="fb"
						desc="Facebook clone built with Next.js, React, Prisma, MongoDB, and Next-Auth"
						href="https://github.com/WitchingHr/fb"
					/>
					<Repo
						title="airbnb"
						desc="Airbnb clone built with Next.js, MongoDB, NextAuth, and Prisma"
						href="https://github.com/WitchingHr/airbnb"
					/>
				</div>
			</div>
		</div>
	);
};

export default Github;
