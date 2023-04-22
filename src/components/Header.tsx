import React, { FC } from "react"
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="sticky top-0 h-[88px] z-50 flex flex-row text-xl text-white section-container">
      <Link href={"/"} className="mr-auto font-bold">WitchingHr<span className="text-green-600">.dev</span></Link>
      <Link href={"#portfolio"} className="mr-8">Portfolio</Link>
      <Link href={"#contact"}>Contact</Link>
    </header>
  )
}

export default Header;
