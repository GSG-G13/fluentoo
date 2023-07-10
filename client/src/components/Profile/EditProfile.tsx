import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button, DatePicker, Form, Input, Radio, Select } from "antd";
import ReactFlagsSelect from "react-flags-select";
import { useAuthContext } from "../../context/AuthContext";
import { ProfileCredentials, ProfileSchema } from "../../utils";
import { interests } from "../common/interests.ts";
import { useProfileContext } from "../../context/ProfileContext.tsx";

const { TextArea } = Input;

function EditProfile() {
  const { user } = useAuthContext();
  const {setProfileData} = useProfileContext()
  const navigate = useNavigate();
  const userId = user.userId;
  const [form] = Form.useForm();
  const initialErrors: ProfileCredentials = {
    gender: "",
    birthDate: "",
    country: "",
    spokenLanguages: "",
    practiceLanguages: "",
    bio: "",
  };
  const [profile, setProfile] = useState<any>();
  const [errors, setErrors] = useState<ProfileCredentials>(initialErrors);
  const [country, setCountry] = useState("");
  const onFinish = async (values: ProfileCredentials) => {
    try {
      const FormData = await ProfileSchema.validate(
        { ...values, country },
        { abortEarly: false }
      );

      const { data } = await axios.put("/api/profile", { userId, ...FormData });
      setProfileData(data.data)
      localStorage.setItem('profileData', JSON.stringify(data.data || null));
      navigate(`/profile/${userId}`);
    } catch (e: any) {
      if (e.name === "ValidationError") {
        e.errors.forEach((error: { fieldName: string; msg: string }) => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            [error.fieldName]: error.msg,
          }));
        });
      }
    }
  };

  useEffect(() => {
    const userData = async () => {
      try {
        const {
          data: { data: resProfile },
        } = await axios.get(`/api/profile/${userId}`);
        setProfile(resProfile);
      } catch (err) {
        console.log(err);
      }
    };
    userData();
  }, []);

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
          <Input type="url" placeholder="optional" />
        </Form.Item>
        <Form.Item label="Native Languages" name="spokenLanguages">
          <Select mode="multiple" placeholder={profile?.spokenLanguages}>
            <Select.Option value="English">English</Select.Option>
            <Select.Option value="French">French</Select.Option>
          </Select>
        </Form.Item>
        <span className="error-message ">{errors.spokenLanguages}</span>
        <Form.Item label="practice Languages" name="practiceLanguages">
          <Select mode="multiple" placeholder={profile?.practiceLanguages}>
            <Select.Option value="demo">English</Select.Option>
            <Select.Option value="French">French</Select.Option>
          </Select>
        </Form.Item>
        <span className="error-message ">{errors?.practiceLanguages}</span>
        <Form.Item label="Interests" name="interests">
          <Select mode="multiple" placeholder={profile?.interests}>
            {interests?.map((interest: any) => (
              <Select.Option value={`${interest}`}>{profile}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Country" name="country">
          <ReactFlagsSelect
            selected={country}
            onSelect={(code) => setCountry(code)}
          />
        </Form.Item>
        <span className="error-message ">{errors?.country}</span>
        <Form.Item label="Birth Date" name="birthDate">
          <DatePicker placeholder={profile?.birthDate} />
        </Form.Item>
        <span className="error-message ">{errors?.birthDate}</span>

        <Form.Item label="Bio" name="bio">
          <TextArea rows={4} placeholder={profile?.bio} />
        </Form.Item>

        <span className="error-message">{errors?.bio}</span>
        <Button className="button" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default EditProfile;
