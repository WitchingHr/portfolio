import React, { useState, useRef } from 'react';

// Components:
import Header from '../components/Header/Header';
import HeadingSection from '../components/sections/heading/HeadingSection'
import HoverHeading from '../components/sections/heading/HoverHeading';
import Portfolio from '../components/Portfolio/Portfolio';
import Contact from '@/components/Contact/Contact';

// Home component:
export default function Home() {

  // Scroll refs:
  const heroRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Handling view states:
  const [viewPortfolio, setViewPortfolio] = useState<boolean>(false);
  const [viewContact, setViewContact] = useState<boolean>(false);
  const handleViewPortfolio = () => {
    setViewPortfolio(true);
  }
  const handleViewContact = () => {
    setViewContact(true);
  }

  // Render:
  return (
    <>
      <Header heroRef={heroRef} portfolioRef={portfolioRef} contactRef={contactRef} fn={scrollToRef} />

      <main>
        {/* Hero: */}
        <HeadingSection scrollRef={heroRef}>
          <h1 className="text-6xl font-bold">
            Matt Thomas
          </h1>
          <h2 className="text-2xl gradient">Full Stack Developer</h2>
        </HeadingSection>

        {/* Portfolio: */}
        {viewPortfolio === false ? (
          <HeadingSection scrollRef={portfolioRef}>
            <HoverHeading sub="Showcasing My Creative Journey" setViewSection={handleViewPortfolio}>Portfolio</HoverHeading>
          </HeadingSection>
        ):(
          <Portfolio scrollRef={portfolioRef} />
        )}

        {/* Contact: */}
        {viewContact === false ? (
          <HeadingSection scrollRef={contactRef}>
            <HoverHeading sub="Get in Touch for Professional Opportunities" setViewSection={handleViewContact}>Contact</HoverHeading>
          </HeadingSection>
        ):(
          <Contact scrollRef={contactRef} />
        )}
      </main>
    </>
  )
}
