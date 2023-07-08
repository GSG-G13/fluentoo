import { Image } from 'antd';
import React from 'react';
import { useProfileContext } from '../../context/ProfileContext';

function UserImage() {
  const profileData: any = useProfileContext()
  if(!profileData) return
  console.log('profileData: ', profileData);
  return (
    <Image
      style={{
        marginLeft: '1rem',
        borderRadius: '50%',
      }}
      width={35}
      preview={false}
      src={profileData?.profileData?.avatar}
    />
  );
}

export default UserImage;
