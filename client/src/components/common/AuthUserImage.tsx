import React from 'react';
import { Image } from 'antd';

function UserImage({profileData}:any) {

  if(!profileData) return
  return (
    <Image
      style={{
        marginLeft: '1rem',
        borderRadius: '50%',
      }}
      width={35}
      preview={false}
      src={profileData?.avatar}
    />
  );
}

export default UserImage;
