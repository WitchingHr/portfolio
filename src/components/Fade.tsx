import React, { FC, PropsWithChildren, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';

const Fade: FC<PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [1.5, 1, 1, 1.5],
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [-45, 0, 0, 45],
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, rotateX }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
