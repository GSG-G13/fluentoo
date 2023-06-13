import React from 'react';
import { Col, Row } from 'antd';
import signupImage from '../../assets/signup.svg';
import { SignupForm } from '../../components';
import './Signup.moduels.css';

function Signup() {
  return (
    <div className="signup">
      <Row className="signup-container">
        <Col className="image-container" md={12}>
          <img src={signupImage} alt="signup" />
        </Col>
        <Col className="form-container" xs={24} md={12}>
          <SignupForm />
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
