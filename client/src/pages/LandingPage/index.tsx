import React from 'react';
import { Hero, AboutUs, Feature } from '../../components/LandingPage';

const Home = () => {
  return (
    <div className="container">
      <Hero />
      <AboutUs />
      <Feature />
    </div>
  );
};

export default Home;
