import React from 'react';
import { ProfileForm } from '../../components';
import './style.modules.css';
import { Banner } from '../../components/Profile';

function ProfileInfo({ mode }: any) {  
  return (
    <div>
      <Banner />
      <div className='container-2'>
        <ProfileForm mode={mode} />
      </div>
    </div>
  );
}

export default ProfileInfo;
