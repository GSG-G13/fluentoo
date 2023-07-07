import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

function AuthUserMenu({ user }: any) {
  const items: MenuProps['items'] = [
    {
      label: <Link to={`/profile/${user.userId}`}>Profile</Link>,
      key: '0',
    },
    {
      label: <Link to={`/profile/update`}>Update Profile</Link>,
      key: '0',
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          <DownOutlined />
          {user.userName}
        </Space>
      </a>
    </Dropdown>
  );
}

export default AuthUserMenu;
