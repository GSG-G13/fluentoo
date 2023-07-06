import React from 'react';
import { WechatOutlined } from '@ant-design/icons';
import { SiderCollapsedPropsType } from '../../utils';
import './style.modules.css';

function ChooseChatButton({ collapsed, setCollapsed }: SiderCollapsedPropsType) {
  return (
    <div className='choose-chat-button-wrapper'>
      <div
        className='choose-chat-button'
        onClick={() => setCollapsed(!collapsed)}
      >
        <u>Choose Chat</u> <WechatOutlined />
      </div>
    </div>
  )
}

export default ChooseChatButton;