"use client"

import { useEffect, useRef, useState } from "react";
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

interface CommitProps {
  commits: Array<null>;
}

// Commits
// renders a grid of commits
// 182 commits for mobile, 364 for desktop
const Commits: React.FC<CommitProps> = ({
  commits,
}) => {
  // state for triggering re-render on window resize
  const [mobile, setMobile] = useState<boolean>(false);

  // ref to track window width
  const windowRef = useRef<number>(window.innerWidth);

  // update window width on resize and mount
  useEffect(() => {
    windowRef.current = window.innerWidth;

    if (windowRef.current < 768) {
      setMobile(true);
    }

    const handleResize = () => {
      windowRef.current = window.innerWidth;

      if (windowRef.current < 768) {
        setMobile(true);
      }

      if (windowRef.current > 768) {
        setMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
      
  return (
    <div className="w-full">
      <p className="ml-2 mr-auto text-sm text-left text-gray-600 md:ml-4">
        contributions in the last year
      </p>
      <div className={`w-full p-2 border border-gray-600 rounded-md md:p-4 ${mobile ? "half-commits" : "commits"}`}>
        {commits.map((item, index) => {
          if (mobile && index > 181) return null;

          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Commits;
