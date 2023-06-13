/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  Layout, Row, Col, Button, Menu, Image, Card,
} from 'antd';

function About() {
  return (
    <div className="aboutus-sec">
      <Row>
        <Col span={24} align="middle" justify="center">

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
        <div className="aboutus-container">
          <Col span={8} align="middle" justify="center">
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={8} align="middle" justify="center">
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>

          <Col span={8} align="middle" justify="center">
            <Card title="Card title" bordered={false} style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default About;
