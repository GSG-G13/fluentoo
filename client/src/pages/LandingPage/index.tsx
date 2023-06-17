import React from 'react'
import { Hero, AboutUs, Feature } from '../../components/LandingPage'
import { Nav, Footer } from '../../components/common'

const LandingPage = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <AboutUs />
        <Feature />
        <Footer />
    </div>
  )
}

export default LandingPage