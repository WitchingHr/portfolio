import React, { FC, PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const variants = {
  hidden: { opacity: 0, filter: 'blur(200px)' },
  visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1 } },
};

const variants2 = {
  hidden: { width: "0%" },
  visible: { width: "100%", transition: { duration: 0.5, delay: 1 } },
};

const HeaderInView: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);


  return (
    <div
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <h1 className="mr-auto text-6xl font-bold">{children}</h1>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants2}
      >
        <hr className="opacity-1 border-0 hr-gradient h-[2px]"></hr>
      </motion.div>
    </div>
  );
};

export default HeaderInView;
