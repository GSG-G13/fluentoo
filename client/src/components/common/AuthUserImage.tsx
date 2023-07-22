import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'antd';

function UserImage({ userId, profileData }: any) {

  if (!profileData) return
  return (
    <Link to={`/profile/${userId}`}>
      <Image
        style={{
          marginLeft: '1rem',
          borderRadius: '50%',
        }}
        width={35}
        preview={false}
        src={profileData.avatar ? profileData.avatar : 'https://scihospital.com/public/assets/images/doctors/user.png'}
      />
    </Link>
  );
}

export default UserImage;
