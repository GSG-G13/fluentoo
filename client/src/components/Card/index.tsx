import React from 'react'
import { Card, Rate, Button, Image } from 'antd';

import {
  SendOutlined
} from '@ant-design/icons';
import './style.modules.css'
import Flag from 'react-world-flags'
import { Link } from 'react-router-dom';
function UserCard(props: any) {
  let data = props.data;
  console.log(data);


  return (
    <Card className='card' >
      <div className='head'>
        <Image
          width={70}
          height={70}
          preview={false}
          style={{ borderRadius: '50%' }}
          src={data.profile?.avatar}
          fallback='https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png'
        />
        <Button type="dashed" icon={<SendOutlined />} shape="round" >
          Message
        </Button></div>
      <Link to={`/profile/${data.id}`}><h1 className='community-user'>{data.username}</h1></Link>

      <div className='bottom'>
        <Rate disabled defaultValue={0} value={data.avgRating} />
        <div className='flags'>
          <Flag code={data.profile?.country} />
        </div>
      </div>


    </Card>
  )
}

export default UserCard