import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Spin,
  Col,
} from 'antd';
import { Link } from 'react-router-dom';
import './SignupForm.modules.css';
import { SignupCredentials, SignupSchema } from '../../utils';

function SignupForm() {
  const initialErrors: SignupCredentials = {
    email: '',
    userName: '',
    password: '',
  };
  const [errors, setErrors] = useState<SignupCredentials>(initialErrors);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: SignupCredentials) => {
    setLoading(true);
    try {
      const data: SignupCredentials = await SignupSchema.validate(values, { abortEarly: false });
      console.log(data);
      setErrors({ ...initialErrors });
    } catch (e: any) {
      if (e.name === 'ValidationError') {
        setErrors({ ...initialErrors });
        e.errors.forEach((error: { fieldName: string, msg: string }) => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [error.fieldName]: error.msg,
          }));
        });
      }
    }
  };

  return (
    <Spin spinning={loading}>
      <Col md={18}>
        <Form
          className="signup-form"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <div className="login-or-signup">
            <p>Welcome To Our App</p>
            <div className="btns">
              <Link to="/login">Login</Link>
              <Link to="/signup" className="active">Signup</Link>
            </div>
          </div>
          <p className="light-text">By continuing, you are setting up an account and agree to our User Agreement.</p>

          <Form.Item
            className="form-text"
            label="Email"
            name="email"
          >
            <Input />
          </Form.Item>
          <span className="error-message">{errors.email}</span>

          <Form.Item
            className="form-text"
            label="User Name"
            name="userName"
          >
            <Input />
          </Form.Item>
          <span className="error-message">{errors.userName}</span>

          <Form.Item
            className="form-password"
            label="Password"
            name="password"
          >
            <Input.Password />
          </Form.Item>
          <span className="error-message">{errors.password}</span>

          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Spin>
  );
}

export default SignupForm;
