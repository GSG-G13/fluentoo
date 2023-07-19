/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/function-component-definition */
import React from 'react';
import { Row, Col, Button, Image, Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import AuthUserMenu from './AuthUserMenu';
import UserImage from './AuthUserImage';
import logo from '../../assets/img/fluento.png';
import { useProfileContext } from '../../context/ProfileContext';
import { useAuthContext } from '../../context/AuthContext';
const { TabPane } = Tabs;
function Nav() {
  const { user  } = useAuthContext();
  const navigate = useNavigate();
  const { profileData } = useProfileContext();
  const handleTabClick = (key: string) => {
    if (key === '1') {
      navigate('/');
    } else if (key === '2') {
      navigate('/community');
    } else if (key === '3') {
      if (user.userId) {
        navigate('/chat');
      }
    } else if (key === '4') {
      if (user.userId) {
        navigate('/quizzes');
      }
    }
  }
    ;
  return (
    <div className="nav-bar">
      <Row align="middle" justify="space-between" className="nav-row">
        <Col>
          <Row align="middle" justify="space-between" >
            <div className="logo">
              <Image width={100} src={logo} preview={false} />
            </div>
            <Tabs defaultActiveKey="1" onTabClick={handleTabClick} >
              <TabPane tab="Home" key="1" />
              <TabPane tab="Community" key="2" />
              <TabPane tab="About" key="3" disabled={true} />
              {user.userId && (
                <>  <TabPane tab="Messages" key="3" />
                  <TabPane tab="Quizes" key="4" /></>

              )}

            </Tabs>

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
                <AuthUserMenu  />
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

