"use client"

import { useEffect, useRef } from "react";

interface ChatProps {
  children: React.ReactNode;
}

const Chat: React.FC<ChatProps> = ({
  children
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div ref={scrollRef} className="flex flex-col flex-1 overflow-scroll">
      <ul className="flex flex-col justify-end flex-1">
        {children}
      </ul>
    </div>
  );
};

export default Chat;
