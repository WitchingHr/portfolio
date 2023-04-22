import React, { FC } from "react"
import HoverLink from "./HoverLink";

interface HeaderProps {
  heroRef: React.RefObject<HTMLElement>;
  portfolioRef: React.RefObject<HTMLElement>;
  contactRef: React.RefObject<HTMLElement>;
  fn: (ref: React.RefObject<HTMLElement>) => void;
}

const Header: FC<HeaderProps> = ({ heroRef, portfolioRef, contactRef, fn }) => {
  return (
    <header className="sticky top-0 h-[88px] z-50 header-gradient flex flex-row text-xl text-white section-container">
      <button className="mr-auto font-bold" onClick={() => fn(heroRef)}>WitchingHr<span className="gradient2">.dev</span></button>
      <button onClick={() => fn(portfolioRef)} className="mr-8"><HoverLink>Portfolio</HoverLink></button>
      <button onClick={() => fn(contactRef)}><HoverLink>Contact</HoverLink></button>
    </header>
  )
}

export default Header;
