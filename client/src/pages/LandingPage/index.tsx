import React from 'react'
import { Layout } from 'antd';
const { Content } = Layout;
import { Hero, AboutUs, Feature } from '../../components/LandingPage'
import { Nav, Footer } from '../../components/common'

const LandingPage = () => {
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

export default LandingPage