import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function AuthUserMenu({ user }: any) {
  const navigate = useNavigate();
  const items: MenuProps['items'] = [
    {
      label: <Link to={`/profile/${user.userId}`}>Profile</Link>,
      key: '0',
    },
    {
      type: 'divider',
    },
    {
      label: <Link to={`/profile/update`}>Update Profile</Link>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <>
          <Button
            onClick={() => {
              Cookies.remove('token');
              localStorage.removeItem('profileData');
              navigate('/');
            }}
          >
            logout
          </Button>
        </>
      ),
      key: '2',
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
