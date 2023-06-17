import React, { useState } from 'react';
import axios from 'axios';
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
import { useAuthContext } from '../../context/AuthContext';

function SignupForm() {
  const { setUser } = useAuthContext();

  const initialErrors: SignupCredentials = {
    email: '',
    username: '',
    password: '',
  };
  const [errors, setErrors] = useState<SignupCredentials>(initialErrors);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: SignupCredentials) => {
    setLoading(true);
    try {

      const formData: SignupCredentials = await SignupSchema.validate(values, { abortEarly: false });

      const { data: userData } = await axios.post("/api/v1/auth/signup", { ...formData });
      setUser({
        userId: userData.data.id,
        userName: userData.data.username,
      })
      setErrors({ ...initialErrors });
      setLoading(false);
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
      setLoading(false);
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
            name="username"
          >
            <Input />
          </Form.Item>
          <span className="error-message">{errors.username}</span>

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
