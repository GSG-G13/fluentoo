import { Footer } from '../../components/Common';
import {
  ProfileInfo,
  RatingAndReview,
  TotalReview,
} from '../../components/Profile';
import './index.css';
import React from 'react';

const ProfilePage = () => {
  return (
    <div>
      <ProfileInfo />
      <TotalReview />
      <RatingAndReview />
      <Footer />
    </div>
  );
};

export default ProfilePage;
