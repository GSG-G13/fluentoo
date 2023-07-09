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
    email: '',
  });

  useEffect(() => {
    const userData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`/api/profile/${profileId}`);

        setProfile({
          ...data,
          birthDate: data.birthDate.split('T')[0],
          email: data.user.email,
        });
      } catch (err) {
        console.log(err);
      }
    };
    userData();
  }, []);

  return (
    <div>
      <div className='info-container'>
        <Card style={{ width: 300 }} className='user-data-card'>
          <Image
            className='profile-image'
            src={profile.avatar}
            preview={false}
          />

          <div className='user-data'>
            <div className='user-name'>
              <h1>{profile.username}</h1>
            </div>

            <div className='user-data-item'>
              <i className='fas fa-envelope'></i>

              <h3>{profile.email}</h3>
            </div>

            <div className='user-data-item'>
              <i className='fas fa-calendar-alt'></i>

              <h3>{profile.birthDate}</h3>
            </div>

            <div className='user-data-item'>
              <i className='fas fa-map-marker-alt'></i>

              <h3>{profile.country}</h3>
            </div>
            <div className='user-data-item'>
              <i className='fas fa-venus-mars'></i>

              <h3>{profile.gender}</h3>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default UserData;
