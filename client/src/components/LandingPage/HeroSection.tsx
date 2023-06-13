/* eslint-disable react/button-has-type */
import React from 'react';

function HeroSection() {
  return (
    <div className="hero-sec">
      <div className="hero-ui">
        <div className="hero-title">
          <h2>
            <strong>Studying</strong>
            {' '}
            Online is now much easier
          </h2>
          <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
          <button className="started-btn">Get Started !</button>
        </div>
        <img src="../../src/assets/img/hero.png" alt="" />
      </div>

    </div>
  );
}

export default HeroSection;
