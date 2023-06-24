/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Row,
  Col,
  Image,
  Button,
} from 'antd';
import heroImage from '../../assets/img/hero.png';
import './LandingPage.css'

function Hero() {
  return (
    <div className="hero-sec">
      <Row gutter={[8, 8]}>
        <div className="hero">
          <Col span={12}>

            <div className="hero-title">
              <h2>
                <strong>Studying</strong>
                {' '}
                Online is now much easier
              </h2>
              <p>
              Join our language exchange website and connect with
               a global community of language enthusiasts. Enhance
                your language skills by engaging in meaningful conversations 
                with fellow learners.

              </p>

              <Button type="primary" shape='round'>
                Get Started !
              </Button>
            </div>

          </Col>
          <Col span={12} className='hero-image'>
            <Image
              src={heroImage}
              preview={false}
            />
          </Col>
        </div>

      </Row>

    </div>
  );
}

export default Hero;
