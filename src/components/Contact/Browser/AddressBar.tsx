import React, { FC } from "react";

// PropTypes
interface AddressBarProps {
	activeTab: number;
}

// AddressBar component: 
// contains the address bar for the browser with a link to my contact information
const AddressBar: FC<AddressBarProps> = ({ activeTab }) => {
	return (
		<div className="flex items-center p-1 bg-slate-800">
			{/* Nav buttons */}
			<div className="flex items-center gap-2 mx-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					aria-hidden="true"
					className="block w-4 h-4 text-gray-600"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					></path>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					aria-hidden="true"
					className="block w-4 h-4 text-gray-600"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					></path>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					aria-hidden="true"
					className="h-4 text-gray-600"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
					></path>
				</svg>
			</div>

			{/* URL */}
			<div className="flex items-center flex-1 px-3 py-1 my-1 text-sm text-left rounded-md bg-slate-950">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="2"
					stroke="currentColor"
					aria-hidden="true"
					className="mr-1.5 h-3 w-3"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					></path>
				</svg>
				{activeTab === 1 ? (
					<a className="url" href="https://www.github.com/WitchingHr/" target="_blank">
						www.github.com/WitchingHr
					</a>
				) : activeTab === 2 ? (
					<a className="url" href="https://linkedin.com/in/matt-thomas-980b30258/" target="_blank">
						www.linkedin.com/in/matt-thomas-980b30258
					</a>
				) : activeTab === 3 ? (
					<a className="url" href="https://discordapp.com/users/WitchingHr#8079/" target="_blank">
						www.discordapp.com/users/WitchingHr#8079
					</a>
				) : (
					<a className="url" href="https://instagram.com/bermalberist/" target="_blank">
						www.instagram.com/bermalberist
					</a>
				)}
				{/* Bookmark Star */}
				<svg
					className="ml-auto"
					height="12"
					width="12"
					viewBox="0 0 100 100"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polygon
						points="50 0, 63 38, 100 38, 69 62, 82 100, 50 75, 18 100, 31 62, 0 38, 38 38"
						fill="none"
						stroke="white"
						strokeWidth="8"
					/>
				</svg>
			</div>
      {/* Kebab Menu */}
			<svg
				className="pl-1 text-gray-600"
				stroke="currentColor"
        strokeWidth="10"
				height="24"
				viewBox="0 0 100 100"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="50" cy="25" r="1" />
				<circle cx="50" cy="50" r="1" />
				<circle cx="50" cy="75" r="1" />
			</svg>
		</div>
	);
};

export default AddressBar;
