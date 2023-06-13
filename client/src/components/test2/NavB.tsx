/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import {
  Layout, Row, Col, Button, Menu,
} from 'antd';
import React from 'react';

const { Header } = Layout;

const AppHeader: React.FC = () => (
  <Header style={{ background: 'none', boxShadow: 'none' }}>
    <Row justify="space-between" align="middle">
      <Col span={8}>
        <div className="logo">Logo</div>
      </Col>
      <Col span={8}>
        <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ background: 'none', display: 'flex', alignItems: 'center' }}>
          <Menu.Item key="1">Nav 1</Menu.Item>
          <Menu.Item key="2">Nav 2</Menu.Item>
          <Menu.Item key="3">Nav 3</Menu.Item>
        </Menu>
      </Col>
      <Col span={8} style={{ textAlign: 'right' }}>
        <Button type="primary">Button 1</Button>
        <Button type="primary">Button 2</Button>
      </Col>
    </Row>
  </Header>
);

export default AppHeader;
