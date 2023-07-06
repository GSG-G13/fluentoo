import React, { useState, useEffect } from 'react';
import { Image, Card } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserData() {
  const { profileId } = useParams();
  const [profile, setProfile] = useState({
    username: '',
    birthDate: '',
    country: '',
    gender: '',
    avatar: '',
    email:'',
  });

console.log(profile,'iiiiiiiii');


  useEffect(() => {
    const userData = async () => {
      try {
        const res = await axios.get(`/api/v1/profile/${profileId}`);
        const data = res.data;
        console.log(data);
        const country = data.data[0].country;
        const birthDate = data.data[0].birthdate.split('T')[0];
        const username = data.data[0].user.username;
        const email = data.data[0].user.email;
        const gender = data.data[0].gender;
        const avatar = data.data[0].avatar;
        console.log(username);

        setProfile((prev) => ({
          ...prev,
          username,
          birthDate,
          country,
          gender,
          avatar,
          email,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    userData();
  }, []);

  return (
    <div>
      <div className="info-container">
        <Card style={{ width: 300 }} className="user-data-card">
          <Image
            className="profile-image"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            preview={false}
          />

          <div className="user-data">
            <div className="user-name">
              <h1>{profile.username}</h1>
            </div>

            <div className="user-data-item">
              <i className="fas fa-envelope"></i>

              <h3>{profile.email}</h3>
            </div>

            <div className="user-data-item">
              <i className="fas fa-calendar-alt"></i>

              <h3>{profile.birthDate}</h3>
            </div>

            <div className="user-data-item">
              <i className="fas fa-map-marker-alt"></i>

              <h3>{profile.country}</h3>
            </div>
            <div className="user-data-item">
              <i className="fas fa-venus-mars"></i>

              <h3>{profile.gender}</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default UserData;
