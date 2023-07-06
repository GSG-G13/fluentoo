import React from 'react';
import { Button, Input } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { SiderCollapsedPropsType } from '../../utils'

function MessagesSiderHead({ collapsed, setCollapsed }: SiderCollapsedPropsType) {
  return (
    <>
      <div className='sider-head'>
        <h2>Messages</h2>
        {collapsed || (
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
      </div>
      <Input size='large' placeholder='Search for a friend' prefix={<SearchOutlined />} />
    </>
  )
}

export default MessagesSiderHead;
