/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Row, Col, Button, Menu, Image } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import AuthUserMenu from './AuthUserMenu';
import UserImage from './AuthUserImage';
import logo from '../../assets/img/fluento.png';
import { useProfileContext } from '../../context/ProfileContext';

function Nav({ user }: any) {
  const navigate = useNavigate();
  const { profileData } = useProfileContext();
  return (
    <div className="nav-bar">
      <Row align="middle" justify="space-between" className="nav-row">
        <Col>
          <Row align="middle" justify="space-between">
            <div className="logo">
              <Image width={100} src={logo} preview={false}/>
            </div>
            <Menu mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/community">Community</Link>
              </Menu.Item>
              {!user.userId ? (
                <Menu.Item key="3">
                  <Link to="/about-us">About</Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="3">
                  <Link to="/chat">Messages</Link>
                </Menu.Item>
              )}
            </Menu>
          </Row>
        </Col>
        <Col>
          <Row align="middle" justify="space-between">
            {!user.userId ? (
              <Button
                onClick={() => {
                  navigate('/auth');
                }}
                className="auth-actions"
                type="primary"
                ghost
                shape="round"
              >
                SignUp
              </Button>
            ) : (
              <>
                <AuthUserMenu user={user} />
                <UserImage profileData={profileData} />
              </>
            )}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Nav;
