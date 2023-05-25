"use client"

import { useRef, useState } from 'react';

import HeadingSection from '../sections/heading/HeadingSection'
import HoverHeading from '../sections/heading/HoverHeading';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
 

const Home = () => {
  // scroll refs
  const heroRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // handling content view states
  const [viewPortfolio, setViewPortfolio] = useState<boolean>(false);
  const [viewContact, setViewContact] = useState<boolean>(false);
  const handleViewPortfolio = () => {
    setViewPortfolio(true);
  }
  const handleViewContact = () => {
    setViewContact(true);
  }

  return (
    <>

      <main>
        {/* Hero: */}
        <HeadingSection scrollRef={heroRef}>
          <h1 className="text-6xl font-bold">
            Matt Thomas
          </h1>
          <h2 className="text-2xl gradient">Full Stack Developer</h2>
        </HeadingSection>

        {/* portfolio section */}
        {viewPortfolio === false ? (
          <HeadingSection scrollRef={portfolioRef} id="portfolio">
            <HoverHeading sub="Showcasing My Creative Journey" setViewSection={handleViewPortfolio}>Portfolio</HoverHeading>
          </HeadingSection>
        ):(
          <Portfolio scrollRef={portfolioRef} />
        )}

        {/* contact section */}
        {viewContact === false ? (
          <HeadingSection scrollRef={contactRef} id="contact">
            <HoverHeading sub="Get in Touch for Professional Opportunities" setViewSection={handleViewContact}>Contact</HoverHeading>
          </HeadingSection>
        ):(
          <Contact scrollRef={contactRef} />
        )}
      </main>
    </>
  )
}

export default Home;
