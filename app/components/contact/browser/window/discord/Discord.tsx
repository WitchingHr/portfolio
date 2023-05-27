"use client"

import Image from "next/image";
import { useState, useEffect, useRef, RefObject } from "react";

import discord from "../../../../../assets/svg/discord.svg";
import arrow from "../../../../../assets/svg/arrow.svg";
import Chat from "./Chat";

// Discord:
// renders a browser window with Discord
const Discord = () => {
  const [messages, setMessages] = useState<Message[]>([chat[0]]);

  // refs
  const chatRef = useRef<HTMLDivElement>(null);

  // set chatbox max height to prevent overflow
  useEffect(() => {
    const getHeight = (ref: RefObject<HTMLDivElement>) => {
      if (!ref.current) return;
      const bounding = ref.current.getBoundingClientRect();
      ref.current.style.maxHeight = `${bounding.height}px`;
    }

    if (chatRef.current) {
      getHeight(chatRef);
    }

    // update height on resize
    window.addEventListener('resize', () => getHeight(chatRef));
    return () => window.removeEventListener('resize', () => getHeight(chatRef));
  }, []);

  // populate chatbox with messages
  useEffect(() => {
    let i = 2;

    // render messages one at a time
    const interval = setInterval(() => {
      // set messages to all messages up to current index
      // setMessages(chat.slice(0, i));
      // debugger;
      setMessages(messages => [...messages, chat[i - 1]]);

      // increment index
      i++;

      // stop interval when all messages have been rendered
      if (i > chat.length - 1) {
        clearInterval(interval);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // message input
  const [inputValue, setInputValue] = useState<string>("");

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // don't send empty messages
    if (inputValue === "") return;

    // add message to chat
    setMessages([...messages, {user: "Guest", text: inputValue}]);

    // clear input
    setInputValue("");
  }


	return (
		<div className="flex flex-1 h-full overflow-auto rounded-b-md">
			{/* servers */}
			<ul className="flex flex-col items-center gap-2 px-4 mt-2">

        {/* discord icon */}
				<a href="http://discordapp.com/users/WitchingHr#8079" target="_blank">
          <li className="relative w-10 h-10 rounded-full bg-slate-500 hover:rounded-xl">
            <Image
              src={discord}
              alt=""
              className="absolute top-0 bottom-0 left-0 right-0 m-auto scale-150"
            />
          </li>
        </a>
        {/* break */}
				<hr className="w-3/4 border border-gray-600" />

        {/* servers */}
				<li className="w-10 h-10 rounded-full bg-slate-500 hover:rounded-xl"></li>
				<li className="w-10 h-10 rounded-full bg-slate-500 hover:rounded-xl"></li>
				<li className="w-10 h-10 rounded-full bg-slate-500 hover:rounded-xl"></li>

        {/* add server button */}
				<li className="w-10 h-10 text-2xl leading-9 rounded-full font-extralight bg-slate-700 hover:rounded-xl">
					+
				</li>
			</ul>

      {/* channel list */}
			<ul className="flex-col hidden xs:flex bg-slate-900">
        <li className="flex items-center justify-between px-4 py-2 h-[41px] border-b border-gray-600">
          <a href="http://discordapp.com/users/WitchingHr#8079" target="_blank" className="mr-2 url">Matt Thomas</a>
          <Image src={arrow} alt="" className="scale-75" />
        </li>

        {/* meta section */}
        <li className="flex pt-2">
          <Image src={arrow} alt="" className="text-gray-600 scale-50" />
          <span className="text-xs text-gray-600">TITLE</span>
        </li>       

        <li className="flex items-center px-4 pt-2">
          <span className="mr-2 text-xl italic font-semibold text-gray-600">#</span>
          <span>developer</span>
        </li>

        {/* skills section */}
        <li className="flex pt-2">
          <Image src={arrow} alt="" className="text-gray-600 scale-50" />
          <span className="text-xs text-gray-600">SKILLS</span>
        </li>       

        {skills.map((skill, i) => (
          <li key={i} className="flex items-center px-4 pt-2">
            <span className="mr-2 text-xl italic font-semibold text-gray-600">#</span>
            <span>{skill}</span>
          </li>
        ))}
			</ul>

      {/* chat section */}
      <div ref={chatRef} className="flex flex-col flex-1 bg-opacity-75 bg-slate-800">
        {/* channel info */}
        <div className="flex items-center px-4 py-2 h-[41px] border-b border-gray-600">
          <span className="mr-2 text-xl italic font-semibold text-gray-600">#</span>
          <span>developer</span>
        </div>

        {/* chatbox */}
        <Chat>
          {messages.map((message, i) => (
            <li key={i} className="flex items-center gap-4 px-4 py-2 min-h-min">
              <Image
                src={message.user === "WitchingHr" ? "/images/me.jpg" : "/images/placeholder.jpg"}
                width={40} height={40}
                alt=""
                className="object-cover rounded-full aspect-square"
              />
              <div className="flex-1 text-sm">
                <div className="text-left text-gray-600">{message.user}</div>
                <div className="text-left">{message.text}</div>
              </div>
            </li>
          ))}
        </Chat>

        {/* message input */}
        <form onSubmit={sendMessage} className="flex items-center p-4">
          <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Message #developer" className="flex-1 h-8 px-4 text-sm rounded-md font-extralight bg-slate-800" />
        </form>
      </div>
		</div>
	);
};

export default Discord;

const skills = ['typescript', 'react', 'node', 'express', 'next', 'tailwind'];

type Message = {
  user: string;
  text: string;
}

const chat = [
  {user: "WitchingHr", text: "Hey, I'm Matt Thomas"},
  {user: "WitchingHr", text: "I'm a full-stack developer"},
  {user: "WitchingHr", text: "I'm currently looking for work"},
  {user: "WitchingHr", text: "I'm proficient in: TypeScript, React, Node, Express, Next, and Tailwind"},
  {user: "WitchingHr", text: "I'm passionate about building beautiful and user-friendly web apps"},
  {user: "WitchingHr", text: "I'm always looking for opportunities to learn and grow"},
  {user: "WitchingHr", text: "Feel free to reach out to me on LinkedIn or Discord"},
  {user: "WitchingHr", text: "Thanks for checking out my portfolio!"},
];