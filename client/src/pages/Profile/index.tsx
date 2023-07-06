import {
  ProfileInfo,
  RatingAndReview,
  TotalReview,
  UserData,
  Banner,
} from '../../components/Profile';
import './index.css';
import React, { useState } from 'react';

const ProfilePage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div>
      <Banner />
      <div className="container">
        <div className="profile-container">
          <div className="left-side">
            <UserData />
          </div>
          <div className="right-side">
            <ProfileInfo />
            <TotalReview isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
            <RatingAndReview
              isSuccess={isSuccess}
              setIsSuccess={setIsSuccess}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
