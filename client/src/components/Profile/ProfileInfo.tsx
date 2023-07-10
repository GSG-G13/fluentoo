import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileInfo = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState<any>();

  useEffect(() => {
    const userData = async () => {
      try {
        const {
          data: { data: profileData },
        } = await axios.get(`/api/profile/${profileId}`);
        const birthDate = profileData.birthDate.slice(0, 4);
        const age = 2023 - birthDate;

        setProfile({
          ...profileData,
          age,
        });
      } catch (err) {
        console.log(err);
      }
    };
    userData();
  }, []);

  return (
    <div>
      <Card style={{ width: 800 }} className="info-card">
        <h2>About</h2>
        <hr />
        <div className="info-item">
          <h3>Bio:</h3>
          <p>{profile?.bio}</p>
        </div>
        <div className="info-item">
          <h3>Age:</h3>
          <p>{profile?.age} y.o</p>
        </div>
        <div className="info-item">
          <h3>interests:</h3>
          {profile?.interests.map((e: any) => (
            <p>{e}</p>
          ))}
        </div>

        <div className="info-item">
          <h3>SpokenLanguages:</h3>
          {profile?.spokenLanguages.map((e: any) => (
            <p>{e}</p>
          ))}
        </div>

        <div className="info-item">
          <h3>PracticeLanguages:</h3>
          {profile?.practiceLanguages.map((e: any) => (
            <p>{e}</p>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProfileInfo;
