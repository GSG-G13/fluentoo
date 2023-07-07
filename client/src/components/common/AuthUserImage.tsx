import { Image } from 'antd';
import React from 'react';

function UserImage() {
  return (
    <Image
      style={{
        marginLeft: '1rem',
        borderRadius: '50%',
      }}
      width={35}
      preview={false}
      fallback="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      
    //   src to be dynamic.........
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}

export default UserImage;
