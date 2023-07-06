import React from 'react';
import { EditProfile } from '../../components';
import './style.modules.css';
import { Banner } from '../../components/Profile';

function ProfileInfo() {
  return (
    <div>
      <Banner />
      <div className='container-2'>
        <EditProfile />
      </div>
    </div>
  );
}

export default ProfileInfo;
