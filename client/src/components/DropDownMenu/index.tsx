import React from 'react'
import { Button, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import menuItems from './menuItems';
import './style.module.css'
function Menu() {
    const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e.domEvent.target);
    };
    const menuProps = {
        items: menuItems,
        onClick: handleMenuClick,
    };
    return (
        <Dropdown menu={menuProps} autoAdjustOverflow={false} >
            <Button>
                <Space>
                    language
                    <DownOutlined />
                </Space>
            </Button>
        </Dropdown>
    )
}

export default Menu