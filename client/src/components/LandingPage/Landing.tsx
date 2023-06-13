/* eslint-disable import/order */
import AboutUs from './AboutUs.tsx';
import Features from './Features.tsx';
import Footer from './Footer.tsx';
import HeroSection from './HeroSection.tsx';
import NavBar from './NavBar.tsx';
import './index.css';

import React from 'react';

function Landing() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Features />
      <Footer />
    </div>
  );
}

export default Landing;
