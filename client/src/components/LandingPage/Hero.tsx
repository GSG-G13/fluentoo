/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Row, Col, Image, Button,
} from 'antd';
import heroImage from '../../assets/img/hero.png';
import './LandingPage.css'

function Hero() {
  return (
    <div className="hero-sec">
      <Row gutter={[8, 8]} style={{marginRight: 0}}>

        <div className="hero">
          <Col span={12}>

            <div className="hero-title">
              <h2>
                <strong>Studying</strong>
                {' '}
                Online is now much easier
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
                reprehenderit reiciendis nulla magnam consequuntur ?
              </p>

              <Button type="primary" shape='round'>
                Get Started !
              </Button>
            </div>

          </Col>
          <Col span={12} align="middle">

            <Image
              width={550}
              src={heroImage}
              preview= {false}
            />
          </Col>
        </div>

      </Row>

    </div>
  );
}

export default Hero;
