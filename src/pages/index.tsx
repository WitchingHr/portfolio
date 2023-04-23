import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Section from '../components/Section'
import HoverHeading from '../components/HoverHeading';
import Portfolio from '../components/Portfolio';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const portfolioRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

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
      <Header heroRef={heroRef} portfolioRef={portfolioRef} contactRef={contactRef} fn={scrollToRef} />
      <main>
        <Section scrollRef={heroRef}>
          <h1 className="text-6xl font-bold">
            Matt Thomas
          </h1>
          <h2 className="text-2xl gradient">Full Stack Developer</h2>
        </Section>
        {viewPortfolio === false ? (
          <Section scrollRef={portfolioRef}>
            <HoverHeading sub="Showcasing My Creative Journey" fn={handleViewPortfolio}>Portfolio</HoverHeading>
          </Section>
        ):(
          <Portfolio scrollRef={portfolioRef} />
        )}
        <Section scrollRef={contactRef}>
          <HoverHeading sub="Get in Touch for Professional Opportunities" fn={handleViewContact}>Contact</HoverHeading>
        </Section>
      </main>
    </>
  )
}
