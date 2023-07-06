import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileInfo = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState({
    bio: '',
    age: 0,
    intrests: [],
    spokenLanguages: [],
    practiceLanguages: [],
  });

  useEffect(() => {
    const userData = async () => {
      try {
        const res = await axios.get(`/api/v1/profile/${profileId}`);
        const data = res.data;
        const spokenLanguages = data.data[0].spokenLanguages;
        const practiceLanguages = data.data[0].practiceLanguages;
        const intrests = data.data[0].intrests;
        const birthDate = data.data[0].birthdate.slice(0, 4);
        const age = 2023 - birthDate;
        const bio = data.data[0].bio;

        setProfile({
          ...profile,
          practiceLanguages,
          age,
          spokenLanguages,
          intrests,
          bio,
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
          <p>{profile.bio}</p>
        </div>
        <div className="info-item">
          <h3>Age:</h3>
          <p>{profile.age} y.o</p>
        </div>
        <div className="info-item">
          <h3>Intrests:</h3>
          {profile.intrests.map((e) => (
            <p>{e}</p>
          ))}
        </div>

        <div className="info-item">
          <h3>SpokenLanguages:</h3>
          {profile.spokenLanguages.map((e) => (
            <p>{e}</p>
          ))}
        </div>

        <div className="info-item">
          <h3>PracticeLanguages:</h3>
          {profile.practiceLanguages.map((e) => (
            <p>{e}</p>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ProfileInfo;
