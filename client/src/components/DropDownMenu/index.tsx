import React from 'react'
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import menuItems from './menuItems';
import { DropMenuProps } from '../../utils'
function Menu({ name, setLanguage }: DropMenuProps) {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        setLanguage(e.key);
    };
    const menuProps = {
        items: menuItems,
        onClick: handleMenuClick,
    };
    return (
        <Dropdown menu={menuProps} autoAdjustOverflow={false} 
        overlayStyle={{ overflowY: 'scroll', height: '150px' }}>
            <Button style={{ marginRight: '20px' }}>
                <Space>
                    {name}
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}

export default Menu