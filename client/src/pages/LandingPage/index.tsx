import React from 'react'
import { Hero, AboutUs, Feature } from '../../components/LandingPage'
import { Nav, Footer } from '../../components/common'

const Home = () => {
  return (
    <>
      <div className='container'>
        <Nav />
        <Hero />
        <AboutUs />
        <Feature />
      </div>
      <Footer />
    </>
  )
}

export default Home;
