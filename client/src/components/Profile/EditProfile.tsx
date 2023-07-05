import React, { useEffect, useState } from 'react';
import { Row, Col, Image, Input, Button, Select, Form, DatePicker } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
import tunisFlag from '../../assets/img/tunisFlag.png';
import { SendOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import ReactFlagsSelect from 'react-flags-select';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';


const EditProfile = () => {
  const [email, setEmail] = useState('johndoe@domain.com');
  const [editMode, setEditMode] = useState(false); 
  
  const[profile, setProfile] = useState<any>(null);
  const [country, setCountry] = useState("")
  const { user } = useAuthContext();
  

  
  
  useEffect(() => {
    const userData = async () => {
      try {
        const res = await axios.get(`/api/v1/profile/${user.userId}`);
        const data = res.data;

        setProfile(data.data[0]);
        
      } catch (err) {
        console.log(err);
      }
    };
    userData();
  }, []);


  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <div className="profile-container-bg">
            <div className="profile-img-bg">
              <div className="profile-img">
                <Image
                  width="65vh"
                  src="https://s.abcnews.com/images/GMA/tom-holland-file-gty-jef-230614_1686763040439_hpMain_1x1_992.jpg"
                />
              </div>
              <div className="profile-info-container">
                <Image width="12vh" src={tunisFlag} />

                <div className="user-info">
                  <span>Name:</span>
                  <Input placeholder={profile?.user.username} name="email"disabled={!editMode} />

                  <span>Birthdate:</span>
                  <Input
                    placeholder="13 y.o"
                    type="date"
                    disabled={!editMode}
                  />
                  <span>Country:</span>
                  <Form.Item >
  <Form.Item name="country" noStyle>
    <ReactFlagsSelect
      selected={country}
      onSelect={(code) => setCountry(code)}
      disabled={!editMode}
    />
  </Form.Item>
</Form.Item>


                  <span>Bio:</span>
                  <TextArea
                    placeholder={profile?.bio}
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    disabled={!editMode}
                  />
                </div>
  
                <div className="msg-input-btn">
                  {editMode ? (
                    <Button
                      type="text"
                      onClick={handleSaveClick}
                      icon={<SaveOutlined />}
                    />
                  ) : (
                    <Button
                      type="text"
                      onClick={handleEditClick}
                      icon={<EditOutlined />}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default EditProfile;
