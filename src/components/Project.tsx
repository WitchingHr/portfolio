import React, { FC, PropsWithChildren, useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";
import HoverLink from "./HoverLink";

const variants = {
	hidden: { opacity: 0, scale: 1.5, x: 500 },
	visible: { opacity: 1, scale: 1, x: 0 },
};

interface ProjectProps {
  scrollRef: React.RefObject<HTMLDivElement>;
	height: number | undefined;
	delay: number;
	title: string;
	subtitle: string;
	tech: string;
	date: string;
  code: string;
  live: string;
	img1: StaticImageData;
	img2: StaticImageData;
}

const Project: FC<PropsWithChildren<ProjectProps>> = ({
  scrollRef,
	height,
	delay,
	title,
	subtitle,
	tech,
	date,
  code,
  live,
	img1,
	img2,
	children,
}) => {
  const [imageSrc, setImageSrc] = useState(img1);

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={variants}
			transition={{ duration: 1, delay: delay }}
		>
			<div ref={scrollRef} className={`flex flex-col snap-start`} style={{height: `${height}px`}}>
				<div className="mt-6">
					<h1 className="text-3xl font-semibold text-left gradient">{title}</h1>
					<h2 className="text-2xl text-left text-white text-opacity-50">
						{subtitle}
					</h2>
				</div>

				<div className="flex flex-row gap-8 mt-6 mb-auto">
					<a href={live}
            onMouseOver={() => setImageSrc(img2)}
            onMouseOut={() => setImageSrc(img1)}
            className="relative flex flex-col items-center justify-center w-[55%] shrink-0"
          >
            {imageSrc === img1 ? (
              <>
                <Image
                  src={img1}
                  alt=""
                  className="rounded-md"
                />
                <Image
                  src={img1}
                  alt=""
                  className="absolute rounded-md -z-10 image-blur"
                />
              </>
              ) : (
                <>
                  <Image
                    src={img2}
                    alt=""
                    className="rounded-md"
                  />
                  <Image
                    src={img2}
                    alt=""
                    className="absolute rounded-md -z-10 image-blur"
                  />
                </>
              )}
					</a>

					<div className="flex flex-col justify-between gap-6">
						<div>
							<h2 className="text-4xl font-semibold text-left">Summary</h2>
							<p className="text-xl font-light text-left text-white text-opacity-50">
								{children}
							</p>
						</div>
						<div className="flex flex-row gap-6">
							<div className="flex-1">
								<h2 className="text-2xl font-semibold text-left">
									Technologies
								</h2>
								<p className="text-xl font-light text-left text-white text-opacity-50">
									{tech}
								</p>
							</div>
							<div className="flex-1">
								<h2 className="text-2xl font-semibold text-left">Date</h2>
								<p className="text-xl font-light text-left text-white text-opacity-50">
									{date}
								</p>
							</div>
						</div>
						<div className="flex flex-row gap-6">
							<a href={code} className="flex flex-row items-center flex-1 gap-1 font-semibold text-left">
                <HoverLink>
                  <span className="text-2xl">GitHub</span>
                </HoverLink>
                <svg className="opacity-50" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="27" width="27" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
							</a>
							<a href={live} className="flex flex-row items-center flex-1 gap-1 font-semibold text-left">
								<HoverLink>
                  <span className="text-2xl">Live Preview</span>
                </HoverLink>
                <svg className="opacity-50" stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="27" width="27" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Project;
