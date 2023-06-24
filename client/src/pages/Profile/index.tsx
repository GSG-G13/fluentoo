import { Footer } from '../../components/Common';
import {
  ProfileInfo,
  RatingAndReview,
  TotalReview,
} from '../../components/Profile';
import EditProfile from '../../components/Profile/EditProfile';
import EditableTextField from '../../components/Profile/test';
import './index.css';
import React from 'react';

const ProfilePage = () => {
  return (
    <div>
      {/* <EditableTextField /> */}
      <EditProfile/>
      {/* <ProfileInfo />
      <TotalReview />
      <RatingAndReview />
      <Footer /> */}
    </div>
  );
};

export default ProfilePage;
