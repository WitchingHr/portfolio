import React, { FC } from "react";
import me from "../../../../assets/linkedin.jpeg";
import Image from "next/image";

// Linkedin:
// renders a browser window with a LinkedIn profile
const Linkedin: FC = () => {
	return (
		<div className="flex flex-1 gap-8">
			<div className="flex flex-col items-start w-1/5 mt-6 ml-8">
				{/* profile pic */}
				<a
					href="http://linkedin.com/in/WitchingHr"
					target="_blank"
				>
					<Image
						src={me}
						alt="linkedIn profile picture"
						className="rounded-[50%] h-auto"
						style={{ objectFit: "cover", aspectRatio: "1/1" }}
					/>
				</a>

				{/* name and title */}
				<h2 className="mt-2 text-sm font-bold text-left">Matt Thomas</h2>
				<p className="text-sm text-left text-gray-500">Web Developer</p>

				{/* location */}
				<p className="mt-2 text-xs text-left">
					Merrimack, New Hampshire, United States
				</p>
			</div>

			<div className="flex flex-col flex-1 mt-4 mr-8">
				{/* about */}
				<div className="flex flex-col p-4 m-2 border border-gray-600 rounded-md">
					<h2 className="font-bold text-left">About</h2>
					<p className="mt-1 text-sm text-left">
						Talented self-taught web developer. I bring a unique blend of
						dedication, creativity, and technical acumen to the world of
						software engineering. Proficient in TypeScript, React, and
						Node/Express, I have spent countless hours honing my skills and
						creating beautifully crafted web apps. My passion for learning and
						building cutting-edge websites drives me to constantly push my
						boundaries, always seeking opportunities to grow and evolve in my
						craft. Motivated by challenges and the sheer joy of creation, I am
						committed to leveraging my skills to build impactful and
						user-friendly web applications.
					</p>
				</div>

				<div className="flex">
          {/* skills */}
          <div className="flex flex-col flex-1 p-4 m-2 border border-gray-600 rounded-md">
            <h2 className="font-bold text-left">Skills</h2>
            <ul className="flex flex-wrap mt-1 text-sm">
              <li className="mr-2">TypeScript</li>
              <li className="mr-2">React</li>
              <li className="mr-2">Node</li>
              <li className="mr-2">Express</li>
              <li className="mr-2">NextJS</li>
              <li className="mr-2">Tailwind</li>
              <li className="mr-2">MongoDB</li>
              <li className="mr-2">Jest</li>
              <li className="mr-2">Git</li>
            </ul>
          </div>

          {/* skills */}
          <div className="flex flex-col flex-1 p-4 m-2 border border-gray-600 rounded-md">
            <h2 className="font-bold text-left">Available for hire!</h2>
            <p className="mt-1 text-sm"></p>
          </div>

        </div>
			</div>
		</div>
	);
};

export default Linkedin;
