import React, { useEffect, useState } from 'react';
import { Row, Col, Image, Input, Button, Select } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
import tunisFlag from '../../assets/img/tunisFlag.png';
import { SendOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import axios from 'axios';

const EditProfile = () => {
  const [email, setEmail] = useState('johndoe@domain.com');
  const [editMode, setEditMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [language, setLanguage] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('select country');

  useEffect(() => {
    const handleCountry = async () => {
      const url = 'https://restcountries.com/v3.1/all';

      try {
        const res = await axios.get(url);
        const countriesData = res.data.map(
          (country: any) => country.name.common
        );
        const sortedCountries = countriesData.sort();
        setCountries(sortedCountries);
      } catch (err) {
        console.log(err);
      }
    };
    handleCountry();
  }, []);


    const handleLanguage = async () => {
        const url =
          'https://restcountries.com/v3.1/independent?status=true&fields=languages,capital';
        try {
          const res = await axios.get(url);
          const languagesData = res.data.map((lang: any) => lang.languages);
          const uniqueLanguagesSet = new Set();
    
          languagesData.forEach((language: any) => {
            Object.values(language).forEach((value) => {
              uniqueLanguagesSet.add(value);
            });
          });
    
          const uniqueLanguages = Array.from(uniqueLanguagesSet);
    
          uniqueLanguages.forEach((lang) => {
            const allLanguages = [];
            allLanguages.push(lang);
           setLanguage(allLanguages);
            
          });
        } catch (err) {
          console.log(err);
        }
      };



  const handleCountryChange = (event: any) => {
    setSelectedCountry(event.target.value);
  };

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
                  <Input name="email" value={email} disabled={!editMode} />

                  <span>Birthdate:</span>
                  <Input
                    placeholder="13 y.o"
                    type="date"
                    disabled={!editMode}
                  />

                  <span>Country:</span>
                  <Select
                    disabled={!editMode}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  >
                    <Option value="select country">Select Country</Option>
                    {countries.map((country, index) => (
                      <Option key={index} value={country}>
                        {country}
                      </Option>
                    ))}
                  </Select>

                  <span>Bio:</span>
                  <TextArea
                    placeholder="Controlled autosize"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                    disabled={!editMode}
                  />
                </div>

                <Select
                  disabled={!editMode}
                  value={language}
                >
                  <Option value="select country">Select Country</Option>
                  {countries.map((country, index) => (
                      <Option key={index} value={country}>
                        {country}
                      </Option>
                    ))}
               
                </Select>

                <div className="msg-input-btn">
                  {editMode ? (
                    <Button
                      type="text"
                      onClick={handleLanguage}
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
