import {
    Button,
    DatePicker,
    Form,
    Input,
    Radio,
    Select,
} from 'antd';
import React, { useState } from 'react';
import { ProfileCredentials, ProfileSchema } from '../../utils';
import axios from 'axios';
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
const { TextArea } = Input;


function ProfileForm() {
    const { user } = useAuthContext();
    const navigate = useNavigate();
    const userId = user.userId;
    const [form] = Form.useForm();
    const initialErrors: ProfileCredentials = {
        gender: '',
        country: '',
        birthdate: '',
        spokenLanguages: '',
        practiceLanguages: '',
        bio: ''
    };
    const [errors, setErrors] = useState<ProfileCredentials>(initialErrors);
    const onFinish = async (values: ProfileCredentials) => {
        try {
            const FormData = await ProfileSchema.validate(values, { abortEarly: false })
            await axios.post("/api/v1/profile", { userId, ...FormData });
            navigate("/community");
        } catch (e: any) {
            if (e.name === 'ValidationError') {
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
        <>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                onFinish={onFinish}
                form={form}
                style={{ maxWidth: 600 }}
            >
                <Form.Item label="Gender" name="gender">
                    <Radio.Group>
                        <Radio value="female"> female </Radio>
                        <Radio value="male"> male</Radio>
                    </Radio.Group>

                </Form.Item>
                <span className="error-message ">{errors.gender}</span>
                <Form.Item label="Image URL" name="avatar">
                    <Input type='url' placeholder='optional' />
                </Form.Item>
                <Form.Item label="Country" name="country">
                    <Select>
                        <Select.Option value="demo">Palestine</Select.Option>
                    </Select>

                </Form.Item>
                <span className="error-message ">{errors.country}</span>
                <Form.Item label="Native Languages" name="spokenLanguages">
                    <Select mode='multiple'>
                        <Select.Option value="English">English</Select.Option>
                        <Select.Option value="French">French</Select.Option>
                    </Select>

                </Form.Item>
                <span className="error-message ">{errors.spokenLanguages}</span>
                <Form.Item label="practice Languages" name='practiceLanguages'>
                    <Select mode='multiple'>
                        <Select.Option value="demo">English</Select.Option>
                        <Select.Option value="French">French</Select.Option>
                    </Select>

                </Form.Item>
                <span className="error-message ">{errors.practiceLanguages}</span>
                <Form.Item label="Intrests" name='intrests'>
                    <Select mode='multiple'>
                        <Select.Option value="Reading">Reading</Select.Option>
                        <Select.Option value="Swimming">Swimming</Select.Option>
                    </Select>

                </Form.Item>
                <Form.Item label="Birth Date" name='birthdate'>
                    <DatePicker />

                </Form.Item>
                <span className="error-message ">{errors.birthdate}</span>

                <Form.Item label="Bio" name='bio'>
                    <TextArea rows={4} placeholder='optional' />
                </Form.Item>
                <span className="error-message">{errors.bio}</span>
                <Button className='button' htmlType="submit">Submit</Button>
            </Form>
        </>
    );
};

export default ProfileForm;
