/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Layout, Row, Col, Button, Menu, Image, Card,
} from 'antd';

function AboutUs() {
  return (
    <div className="aboutus-sec">
      <Row>
        <Col span={24}>

          <div className="about-title">
            <h3>
              <strong>All-In-One</strong>
              {' '}
              Cloud Softward.
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
              reprehenderit reiciendis nulla magnam
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={8}>
          <Card className='gg'>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default AboutUs;
