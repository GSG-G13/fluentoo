import React, { useState } from 'react';
import axios from 'axios';
import {
  Form,
  Input,
  Button,
  Spin,
  Col,
} from 'antd';
import { LoginCredentials, LoginSchema } from '../../utils';
import { useAuthContext } from '../../context/AuthContext';
import GoogleAuth from '../GoogleAuth';
function LoginForm({ setActive }: any) {
  const { setUser } = useAuthContext();

  const initialErrors: LoginCredentials = {
    email: '',
    password: '',
  };
  const [errors, setErrors] = useState<LoginCredentials>(initialErrors);
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onFinish = async (values: LoginCredentials) => {
    setLoading(true);
    try {

      const formData: LoginCredentials = await LoginSchema.validate(values, { abortEarly: false });

      const { data: userData } = await axios.post("/api/v1/auth/login", { ...formData });
      setUser({
        userId: userData.data.id,
        userName: userData.data.username,
      })
      setErrors({ ...initialErrors });
      setLoading(false);
    } catch (e: any) {
      
      if (e.name === "AxiosError") {
        setErrors({ ...initialErrors });
        setErrors((prevErrors) => ({
          ...prevErrors,
         "password": e.response.data.msg
        }))
      }

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
      <Col md={15}>
        <h1>Welcome Back!!</h1>

        <Form
          className="auth-form"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <p className='light-text'>Expand your language skills through global connections.</p>
          <Form.Item
            className="form-text"
            name="email"
          >
            <Input placeholder='Email' />
          </Form.Item>
          <span className="error-message e">{errors.email}</span>

          <Form.Item
            className="form-password"
            name="password"
          >
            <Input.Password placeholder='Password' />
          </Form.Item>
          <span className="error-message e">{errors.password}</span>

          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
          <h5 className='or'>OR</h5>
          <GoogleAuth page={'/community'} />
          <p className='light-text p'>You dont have an account ? <button type='button' className='register' onClick={() => setActive(true)}>Sign Up </button> </p>
        </Form>
      </Col>
    </Spin>
  );
}

export default LoginForm;
