import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button, DatePicker, Form, Input, Radio, Select } from 'antd';
import { UploadImage,Options  } from '../index';
import ReactFlagsSelect from 'react-flags-select';
import { useAuthContext } from '../../context/AuthContext';
import { ProfileCredentials, ProfileSchema } from '../../utils';
import { interests } from './interests';
import { useProfileContext } from '../../context/ProfileContext';

const { TextArea } = Input;

function ProfileForm() {
  const { user } = useAuthContext();
  const { setProfileData } = useProfileContext()
  const navigate = useNavigate();
  const userId = user.userId;
  const [avatar, setAvatar] = useState('');
  const [spokenLanguages, setSpokenLanguages] = useState<string>('')
  const [practiceLanguages, setPracticeLanguages] = useState<string>('')
  const [form] = Form.useForm();
  const initialErrors: ProfileCredentials = {
    gender: '',
    birthDate: '',
    country: '',
    spokenLanguages: '',
    practiceLanguages: '',
    bio: '',
  };
  const [errors, setErrors] = useState<ProfileCredentials>(initialErrors);
  const [country, setCountry] = useState('');
  const onFinish = async (values: ProfileCredentials) => {
    try {
      const FormData = await ProfileSchema.validate(
        { ...values, country, avatar, spokenLanguages, practiceLanguages },
        { abortEarly: false }
      );
      const profile = await axios.post('/api/profile', { userId, ...FormData });
      setProfileData(profile.data.data)
      localStorage.setItem('profileData', JSON.stringify(profile.data.data || null));
      navigate('/community');
    } catch (e: any) {
      if (e.name === 'ValidationError') {
        e.errors.forEach((error: { fieldName: string; msg: string }) => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [error.fieldName]: error.msg,
          }));
        });
      }
    }
  };

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        onFinish={onFinish}
        form={form}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label='Gender' name='gender'>
          <Radio.Group>
            <Radio value='female'> female </Radio>
            <Radio value='male'> male</Radio>
          </Radio.Group>
        </Form.Item>
        <span className='error-message '>{errors.gender}</span>
        <Form.Item label='Image' name='avatar'>
          <UploadImage avatar={avatar} setAvatar={setAvatar} />
        </Form.Item>
        <Form.Item label='Native Languages' name='spokenLanguages'>
          <Options placeholder={''} onchange={(value: string) => setSpokenLanguages(value)
          } />
        </Form.Item>
        <span className='error-message '>{errors.spokenLanguages}</span>
        <Form.Item label='practice Languages' name='practiceLanguages'>
          <Options placeholder={''} onchange={(value: string) => setPracticeLanguages(value)
          } />
        </Form.Item>
        <span className='error-message '>{errors.practiceLanguages}</span>
        <Form.Item label='Interests' name='interests'>
          <Select mode='multiple'>
            {interests?.map((interest: any, i: number) => (
              <Select.Option key={i} value={`${interest}`}>{interest}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='Country' name='country'>
          <ReactFlagsSelect
            selected={country}
            onSelect={(code) => setCountry(code)}
          />
        </Form.Item>
        <span className='error-message '>{errors.country}</span>
        <Form.Item label='Birth Date' name='birthDate'>
          <DatePicker />
        </Form.Item>
        <span className='error-message '>{errors.birthDate}</span>

        <Form.Item label='Bio' name='bio'>
          <TextArea rows={4} placeholder='optional' />
        </Form.Item>

        <span className='error-message'>{errors.bio}</span>
        <Button className='button' htmlType='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ProfileForm;
