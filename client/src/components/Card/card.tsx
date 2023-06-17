import React from 'react'
import { Card , Rate,Button } from 'antd';
import {
  SendOutlined
} from '@ant-design/icons';
import './Card.modules.css'
function CardDiv() {
  return (
    <Card style={{ width: 300 }}>
      <div className='head'>
        <img src='https://th.bing.com/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQHaHa?pid=ImgDet&rs=1' style={{width:70 , height:70}}/>
      <Button type="dashed" icon={<SendOutlined />} shape="round" >
           Message
          </Button></div>
       <h2>Aya Qunoo</h2>
      
       <div className='bottom'>
       <Rate disabled defaultValue={2} />
       <div className='flags'>
        <img src="https://cdn-icons-png.flaticon.com/128/206/206657.png" alt="" />
       <img src="https://cdn-icons-png.flaticon.com/128/555/555613.png" alt="" /></div>
       </div>
    
         
    </Card>
  )
}

export default CardDiv