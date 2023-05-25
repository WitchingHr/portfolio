import React, { FC } from "react";
import Image from "next/image";

// assests
import github from "../../../assets/svg/github.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import discord from "../../../assets/svg/discord.svg";

// props
interface TabProps {
	id: number;
	title: string;
	activeTab: number;
	setActiveTab: (id: number) => void;
}

// Tab:
// browser tab
const Tab: FC<TabProps> = ({ id, title, activeTab, setActiveTab }) => {
	const style =
		activeTab === id
			? "!bg-slate-800 active"
			: "bg-slate-950 inactive";

	return (
		<button className={`rounded-t-md hover:bg-slate-900 relative ` + style} onClick={() => setActiveTab(id)}>
			<div className="flex items-center gap-2 px-3">
				<Image
					src={
						id === 1
							? github
							: id === 2
							? linkedin
							: discord
					}
					alt=""
				/>
				<div className="w-24 text-sm text-left">{title}</div>
			</div>
		</button>
	);
};

export default Tab;