// import { Footer } from '../../components/Common';
import {
  ProfileInfo,
  RatingAndReview,
  TotalReview,
} from '../../components/Profile';
import EditProfile from '../../components/Profile/EditProfile';
import './index.css';
import React, { useState } from 'react';

const ProfilePage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div>
      <ProfileInfo />
      <TotalReview isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
      <RatingAndReview isSuccess={isSuccess} setIsSuccess={setIsSuccess} />
      {/* <Footer /> */}
    </div>
  );
};

export default ProfilePage;
