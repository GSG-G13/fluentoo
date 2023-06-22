import React from 'react';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import InputEmoji from 'react-input-emoji';
import { SendMessageFormPropsType } from '../../utils';

function SendMessageForm({ text, setText, handleSendMessage }: SendMessageFormPropsType) {
  return (
    <div className='user_input'>
      <form>
        <InputEmoji
          value={text}
          onChange={setText}
          cleanOnEnter
          onEnter={handleSendMessage}
          placeholder="Type a message"
        />
        <Button onClick={handleSendMessage} type="primary" shape="round" icon={<SendOutlined />} />
      </form>
    </div>
  )
}

export default SendMessageForm;
