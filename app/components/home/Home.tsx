"use client"

import { useState } from 'react';

import HeadingSection from '../sections/heading/HeadingSection'
import HoverHeading from '../sections/heading/HoverHeading';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';
 

const Home = () => {
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
        <HeadingSection>
          <h1 className="text-6xl font-bold">
            Matt Thomas
          </h1>
          <h2 className="text-2xl gradient">Full Stack Developer</h2>
        </HeadingSection>

        <Portfolio />
        <Contact />
      </main>
    </>
  )
}

export default Home;
