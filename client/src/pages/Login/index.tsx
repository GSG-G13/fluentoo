import React from 'react';
import { Col, Row, Image } from 'antd';
import loginImage from '../../assets/signup.svg';
import { LoginForm } from '../../components';

function Login() {
  return (
    <div className="auth">
      <Row className="auth-container">
        <Col className="image-container" md={12}>
          <Image
            src={loginImage}
            preview={false}
            alt="login"
          />
        </Col>
        <Col className="form-container" xs={24} md={12}>
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
