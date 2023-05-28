"use client";

// props
interface URLProps {
	href: string;
	url: string;
	tabIndex: number;
}

// URL
// contains the url for the active tab
const URL: React.FC<URLProps> = ({ href, url, tabIndex }) => {
	return (
		<a
			className="flex-1 truncate gradient"
			href={href}
			target="_blank"
			tabIndex={tabIndex}
		>
			{url}
		</a>
	);
};

export default URL;
