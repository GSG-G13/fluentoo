import React from 'react';
import { Button, Image } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { ChatUserHeadPropsType } from '../../utils'

function ChatUserHead({ selectedUser, collapsed, setCollapsed }: ChatUserHeadPropsType) {
  return (
    <div className='user-header'>
      {collapsed && (
        <Button
          className='burger-menu'
          type='text'
          icon={<MenuOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      )}
      <Image
        src='https://th.bing.com/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQHaHa?pid=ImgDet&rs=1'
        width={50}
        height={50}
        preview={false}
        alt='user'
      />
      <h3>{selectedUser.userName}</h3>
    </div>
  )
}

export default ChatUserHead;