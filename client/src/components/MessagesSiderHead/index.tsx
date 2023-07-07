import React from 'react';
import { Button, Input } from 'antd';
import { MenuOutlined, SearchOutlined } from '@ant-design/icons';
import { SiderCollapsedPropsType } from '../../utils'

function MessagesSiderHead({ allContacts, setFilterdContacts: setFilteredContacts, collapsed, setCollapsed }: SiderCollapsedPropsType) {
  const onSearch = (value: string) => {
    if (setFilteredContacts && allContacts) {
      const filteredContacts = allContacts.filter((contact) =>
        contact.userName.toLowerCase().startsWith(value.toLowerCase())
      );
      setFilteredContacts(filteredContacts);
    }
  };

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
      <Input placeholder="input search text" onChange={(e) => onSearch(e.target.value)} prefix={<SearchOutlined />} />
    </>
  )
}

export default MessagesSiderHead;
