"use client";

interface RepoProps {
	title: string;
	desc: string;
	href: string;
}

const Repo: React.FC<RepoProps> = ({ title, desc, href }) => {
	return (
		<div className="w-full p-2 border border-gray-600 rounded-md md:p-4">
			<div className="flex flex-col items-center justify-between h-full gap-2">
				<div className="flex items-center gap-2 mr-auto">
					<svg
						aria-hidden="true"
						height="14"
						viewBox="0 0 16 16"
						version="1.1"
						width="14"
					>
						<path
							fill="#9ca3af"
							d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
						></path>
					</svg>
					<a
						href={href}
						target="_blank"
						className="text-sm font-medium text-[#2f81f7]"
					>
						{title}
					</a>
					<span className="px-1.5 text-xs font-medium text-gray-400 border border-gray-600 rounded-full">
						Public
					</span>
				</div>
				<div className="mr-auto text-xs text-left text-gray-400">{desc}</div>
				<div className="flex items-center gap-1 mt-auto mr-auto">
					<span className="w-3 h-3 block rounded-full bg-[#3178c6]"></span>
					<span className="text-xs text-gray-400">TypeScript</span>
					<svg
						height="12"
						width="12"
						viewBox="0 0 100 100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<polygon
							points="50 0, 63 38, 100 38, 69 62, 82 100, 50 75, 18 100, 31 62, 0 38, 38 38"
							stroke="#9ca3af"
							fill="transparent"
							strokeWidth="8"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Repo;
