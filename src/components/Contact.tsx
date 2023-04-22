import React, { FC, useRef } from "react";
import Fade from "./Fade";

const Contact: FC = () => {

  return (
    <section id="contact" className="flex flex-col items-center justify-center h-screen text-center text-white perspective snap-start snap-mandatory section-container">
      <Fade>
        <h1 className="text-6xl font-bold">Contact</h1>
        <h2 className="text-2xl">Coming Soon</h2>
      </Fade>
    </section>
  )
}

export default Contact;
