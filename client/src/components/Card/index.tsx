import React, { useEffect } from 'react'
import { Card, Rate, Button, Image } from 'antd';
import {
  SendOutlined
} from '@ant-design/icons';
import './style.modules.css'
function UserCard({ data }) {
  console.log(data.avgRating);

  return (
    <Card style={{ width: 300 }}>
      <div className='head'>
        <Image
          width={70}
          height={70}
          preview={false}
          style={{ borderRadius: '50%' }}
          src={data.profile.avatar}
        />
        <Button type="dashed" icon={<SendOutlined />} shape="round" >
          Message
        </Button></div>
      <h2>{data.username}</h2>

      <div className='bottom'>
        <Rate disabled defaultValue={0} value={data.avgRating} />
        <div className='flags'>
          <img src="https://cdn-icons-png.flaticon.com/128/206/206657.png" alt="" />
          <img src="https://cdn-icons-png.flaticon.com/128/555/555613.png" alt="" /></div>
      </div>


    </Card>
  )
}

export default UserCard