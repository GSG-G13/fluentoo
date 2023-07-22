import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/profile/${selectedUser.userId}`}>
        <Image
          src={selectedUser.avatar}
          width={50}
          height={50}
          preview={false}
          style={{ borderRadius: '50%' }}
          alt='user'
        />
      </Link>
      <h3>{selectedUser.userName}</h3>
    </div>
  )
}

export default ChatUserHead;