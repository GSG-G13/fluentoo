import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { EditOutlined, SaveOutlined } from '@ant-design/icons';
import axios from 'axios';

const EditableTextField = () => {
  const [email, setEmail] = useState('johndoe@domain.com');
  const [editMode, setEditMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('select country');

  useEffect(() => {
    handleCountry();
  }, []);

  const handleCountry = async () => {
    const url = 'https://restcountries.com/v3.1/all';

    try {
      const res = await axios.get(url);
      const countriesData = res.data.map((country) => country.name.common);
      const sortedCountries = countriesData.sort();
      setCountries(sortedCountries);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // You can perform additional actions here to save the changes
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 50,
      }}
    >
      <div
        style={{
          textAlign: 'left',
          color: 'red',
          fontSize: '16px',
          width: '100%',
          backgroundColor: '#fdfdd5',
          padding: '5px',
          lineHeight: '25px',
        }}
      >
        <ul>
          <li>Email: {JSON.stringify(email)}</li>
          <li>editMode: {JSON.stringify(editMode)}</li>
        </ul>
      </div>
      <Input
        name="email"
        value={email}
        onChange={handleChange}
        disabled={!editMode}
        style={{
          marginLeft: 0,
          marginRight: 0,
          width: 300,
          color: 'black',
          fontSize: 30,
          opacity: 1,
          borderBottom: 0,
        }}
        suffix={
          editMode ? (
            <Button
              type="text"
              onClick={handleSaveClick}
              style={{ marginLeft: 10 }}
              icon={<SaveOutlined />}
            />
          ) : (
            <Button
              type="text"
              onClick={handleEditClick}
              style={{ marginLeft: 10 }}
              icon={<EditOutlined />}
            />
          )
        }
      />
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        disabled={!editMode}
        style={{ marginTop: 10 }}
      >
        <option value="select country">Select Country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default EditableTextField;
