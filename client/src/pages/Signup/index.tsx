import React from 'react';
import { Col, Row, Image } from 'antd';
import signupImage from '../../assets/signup.svg';
import { SignupForm } from '../../components';
import './style.moduels.css';

function Signup() {
  return (
    <div className="auth">
      <Row className="auth-container">
        <Col className="image-container" md={12}>
          <Image
            src={signupImage}
            preview={false}
            alt="signup"
          />
        </Col>
        <Col className="form-container" xs={24} md={12}>
          <SignupForm />
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
