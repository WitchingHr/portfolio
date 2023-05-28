"use client";

import Image from "next/image";

import github from "../../../assets/svg/github.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import discord from "../../../assets/svg/discord.svg";

// props
interface TabProps {
	id: number;
	title: string;
	activeTab: number;
	setActiveTab: (id: number) => void;
	tabIndex: number;
}

// Tab
// browser tab, clicking on it changes the active tab
const Tab: React.FC<TabProps> = ({ id, title, activeTab, setActiveTab, tabIndex }) => {
	const style =
		activeTab === id ? "!bg-slate-800 active" : "bg-slate-950 inactive";

	return (
		<button
			tabIndex={tabIndex}
			aria-label={`Show ${title} tab`}
			className={
				`flex-1 max-w-[144px] rounded-t-md hover:bg-slate-900 relative ` + style
			}
			onClick={() => setActiveTab(id)}
		>
			<div className="flex items-center gap-2 px-3">
				{/* tab favicon */}
				<Image
					src={id === 1 ? github : id === 2 ? linkedin : discord}
					alt=""
					aria-hidden="true"
				/>

				{/* tab title */}
				<div className="text-sm text-left truncate" aria-hidden="true">
					{title}
				</div>
			</div>
		</button>
	);
};

export default Tab;
