"use client";

import { useEffect, useRef } from "react";

// props
interface ChatProps {
	children: React.ReactNode;
}

// Chat
// renders a chat window, scrolls to bottom on when a message is sent
const Chat: React.FC<ChatProps> = ({ children }) => {
	// ref to scroll to bottom of chat window
	const scrollRef = useRef<HTMLDivElement>(null);

	// scroll to bottom of chat window on mount and when a message is sent
	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [children]);

	return (
		<div ref={scrollRef} className="flex flex-col flex-1 overflow-scroll">
			<ul className="flex flex-col justify-end flex-1">{children}</ul>
		</div>
	);
};

export default Chat;
