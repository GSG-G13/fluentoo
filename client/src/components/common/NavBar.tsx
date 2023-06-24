/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import { Row, Col, Button, Menu } from 'antd';
import React from 'react';

function Nav() {
  return (
    <div className="nav-bar">
      <Row align="middle" className="nav-btn">
        <Col span={8}>
          <div className="logo">Logo</div>
        </Col>
        <Col span={8}>
          <Menu mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Community</Menu.Item>
            <Menu.Item key="3">Messages</Menu.Item>
            <Menu.Item key="4">Profile</Menu.Item>
          </Menu>
        </Col>
        <Col span={8}>
          <Button type="primary" ghost shape="round">
            SignUp
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Nav;
