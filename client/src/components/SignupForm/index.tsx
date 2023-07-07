import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Spin, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SignupCredentials, SignupSchema } from '../../utils';
import { useAuthContext } from '../../context/AuthContext';
import GoogleAuth from '../GoogleAuth';
import './style.modules.css';

function SignupForm({ setActive }: any) {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();
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
      const formData: SignupCredentials = await SignupSchema.validate(values, {
        abortEarly: false,
      });
      const { data: userData } = await axios.post(
        '/api/signup',
        {
          ...formData,
        }
      );
      setUser({
        userId: userData.data.id,
        userName: userData.data.username,
      });
      setErrors({ ...initialErrors });
      setLoading(false);
      navigate('/profile/create');
    } catch (e: any) {
      if (e.name === 'AxiosError') {
        setErrors({ ...initialErrors });
        console.log(e.response.data.msg);

        
        setErrors((prevErrors) => ({
          ...prevErrors,
          'email': e.response.data.msg
        }))

      }
      if (e.name === 'ValidationError') {
        setErrors({ ...initialErrors });
        e.errors.forEach((error: { fieldName: string; msg: string }) => {
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
        <h1>Create an Account</h1>
        <Form
          className='auth-form'
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete='off'
          layout='vertical'
        >
          <p className='light-text'>
            Connect with like-minded individuals and enhance your language
            skills.
          </p>

          <Form.Item className='form-text' name='email'>
            <Input placeholder='Email' />
          </Form.Item>
          <span className='error-message e'>{errors.email}</span>

          <Form.Item className='form-text' name='username'>
            <Input placeholder='Username' />
          </Form.Item>
          <span className='error-message e'>{errors.username}</span>

          <Form.Item className='form-password' name='password'>
            <Input.Password placeholder='Password' />
          </Form.Item>
          <span className='error-message e'>{errors.password}</span>

          <Form.Item wrapperCol={{ offset: 0, span: 16 }}>
            <Button type='primary' htmlType='submit'>
              Sign Up
            </Button>
          </Form.Item>
          <h5 className='or'>OR</h5>
          <GoogleAuth page={'/profile/create'} />
          <p className='light-text p'>
            Already have an account ?{' '}
            <button
              type='button'
              className='register'
              onClick={() => setActive(false)}
            >
              Sign in{' '}
            </button>{' '}
          </p>
        </Form>
      </Col>
    </Spin>
  );
}

export default SignupForm;
