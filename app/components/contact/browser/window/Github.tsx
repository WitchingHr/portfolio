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
    <div className="flex flex-col flex-1 gap-2 p-4 md:gap-8 md:p-0 md:flex-row browser-gradient">

      {/* profile info */}
      <div className="flex flex-row items-center w-1/5 gap-4 md:gap-0 md:items-start md:mt-6 md:ml-8 md:flex-col">

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
          <h2 className="mt-2 text-sm font-bold text-left whitespace-nowrap">Matt Thomas</h2>
          <p className="text-sm text-left text-gray-500">WitchingHr</p>

          {/* email */}
          <a
            href="mailto:matt.thomas.developer@gmail.com"
            className="flex-wrap hidden mt-2 text-xs text-left xs:flex url"
          >
            <span>matt.thomas.developer</span>
            <span>@gmail.com</span>
          </a>
        </div>
      </div>

      {/* readme and commits */}
      <div className="flex flex-col items-center flex-1 gap-2 mt-2 md:gap-0 md:mt-4 md:mr-8 md:items-baseline">
        {/* readme */}
        <div className="flex flex-col w-full p-2 border border-gray-600 rounded-md md:p-4 md:m-2">
          <p className="text-xs text-left text-gray-600">WitchingHr/README.md</p>
          <h2 className="mt-2 text-left">Hey! 👋</h2>
          <p className="mt-1 text-sm text-left">Welcome to my portfolio!<br></br>Click the URLs in the address bar to find me on social media</p>
        </div>

        {/* commits */}
        <p className="ml-4 mr-auto text-sm text-left text-gray-600 md:mr-0">contributions in the last year</p>

        <div className="w-full p-1 border border-gray-600 rounded-md md:p-4 md:m-2 commits">
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
