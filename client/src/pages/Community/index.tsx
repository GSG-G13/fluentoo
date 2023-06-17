import React from 'react'
import { Col, Row , Input} from 'antd';
import { Button, Dropdown,  Space } from 'antd';
import { DownOutlined , SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import  CardDiv  from '../../components/Card/card.tsx';
import './community.modules.css'
import menuItems from './menuItems';
function Community() {
      const handleMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e.domEvent.target);
      };
    const menuProps = {
        items: menuItems, 
        onClick: handleMenuClick,
      };
  return (
    <div className='community'>
        <div className='header'>
        <Input size="large" placeholder="large size" prefix={<SearchOutlined />} />
      <Dropdown menu={menuProps} >
      <Button>
        <Space>
          language
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
        </div>
     
  <Row gutter={16} >
      <Col  xs={24} sm={16} md={12} lg={7} xl={8}>
        <CardDiv/>
      </Col>
  </Row>
</div>
  )
}

export default Community