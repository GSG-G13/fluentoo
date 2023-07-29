import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'antd';

function UserImage({ userId, profileData }: any) {

  if (!profileData) return
  return (
    <Link to={`/profile/${userId}`}>
      <Image
        style={{
          borderRadius: '50%',
          objectFit: 'contain',
        }}
        width={35}
        height={35}
        preview={false}
        src={profileData.avatar ? profileData.avatar : 'https://scihospital.com/public/assets/images/doctors/user.png'}
      />
    </Link>
  );
}

export default UserImage;
