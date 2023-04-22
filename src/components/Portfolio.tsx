import React, { FC, useRef } from "react";
import Fade from "./Fade";

const Portfolio: FC = () => {

  return (
    <section id="portfolio" className="flex flex-col items-center justify-center h-screen text-center text-white perspective snap-start section-container">
      <Fade>
        <h1 className="text-6xl font-bold">Portfolio</h1>
        <h2 className="text-2xl">Coming Soon</h2>
      </Fade>
    </section>
  )
}

export default Portfolio;
