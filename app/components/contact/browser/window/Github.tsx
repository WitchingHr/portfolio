import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// animation variants
const commitVariants = { 
  initial: {
    backgroundColor: "#161B22",
  },
  final: {
    backgroundColor: "#39d353",
  },
};

// commits array for grid, 364 commits
const commits: string[] = [];
while (commits.length !== 364) {
  commits.push("i");
}

// Github:
// renders a github window
const Github: FC = () => {
  return (
    <div className="flex flex-1 gap-8">

      {/* profile info */}
      <div className="flex flex-col items-start w-1/5 mt-6 ml-8">

        {/* profile pic */}
        <a
          href="http://github.com/WitchingHr"
          target="_blank"
          className="relative w-full max-w-[200px] aspect-square"
        >
          <Image
            src={"/images/me.jpg"}
            alt="GitHub Profile picture"
            fill
            className="rounded-[50%] object-cover"
          />
        </a>

        {/* name and username */}
        <h2 className="mt-2 text-sm font-bold text-left">Matt Thomas</h2>
        <p className="text-sm text-left text-gray-500">WitchingHr</p>

        {/* email */}
        <a
          href="mailto:matt.thomas.developer@gmail.com"
          className="mt-2 text-xs text-left url"
        >
          matt.thomas.developer@gmail.com
        </a>
      </div>

      {/* readme and commits */}
      <div className="flex flex-col flex-1 mt-4 mr-8">
        {/* readme */}
        <div className="flex flex-col p-4 m-2 border border-gray-600 rounded-md">
          <p className="text-xs text-left text-gray-600">WitchingHr/README.md</p>
          <h2 className="mt-2 text-left">Hey! 👋</h2>
          <p className="mt-1 text-sm text-left">Welcome to my portfolio!<br></br>Click the URLs in the address bar to find me on social media</p>
        </div>

        {/* commits */}
        <p className="ml-4 text-sm text-left text-gray-600">contributions in the last year</p>
        <div className="p-4 m-2 border border-gray-600 rounded-md commits">
          {commits.map((item, index) => (
            <motion.div
              variants={commitVariants}
              initial="initial"
              animate="final"
              transition={{
                duration: 3,
                delay: Math.floor(Math.random() * 10) + 1 * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              key={index}
              className="border border-black rounded-sm aspect-square"
            ></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Github;
