import React from 'react';
import { Image } from 'antd';
function Banner() {
  return (
    <div>
      <div className="banner">
        <Image
          className="banner-img"
          src="https://cdn.discordapp.com/attachments/362023502964064261/1126249465985118288/ww.png"
          preview={false}
        />
      </div>
    </div>
  );
}

export default Banner;
