import React, { FC } from "react";
import Fade from "./Fade";

const Hero: FC = () => {

	return (
		<section className="flex flex-col items-center justify-center h-screen text-center text-white perspective snap-start section-container">
      <Fade>
        <h1 className="text-6xl font-bold">
          Hi, I&apos;m <span className="text-green-600">Matt Thomas</span>
        </h1>
        <h2 className="text-2xl">I&apos;m a Full Stack Developer</h2>
      </Fade>
		</section>
	);
};

export default Hero;
