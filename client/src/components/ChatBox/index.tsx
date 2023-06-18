import React from 'react';

import './style.modules.css'
import { Layout, Input, Button } from 'antd';
import { SearchOutlined, SendOutlined } from '@ant-design/icons';
import Message from '../Message';
import User from '../User';
const { Content, Sider } = Layout;
function ChatBox() {
  let msgs = [
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 4, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },
    { sender: 1, text: "hello frome the oter side", data: '12:30pm' },

  ]
  return (
    <Layout className='main-layout' hasSider>
      <Sider
        className='side-bar'
        width={350}
      >
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <h2>Messages</h2>
          <Input size="large" placeholder="Search for a friend" prefix={<SearchOutlined />} />
          <div className='users-box'>
            <User />
          </div>
        </Content>
      </Sider>
      <Layout className="site-layout">

        <Content>
          <div className='user-header'>
            <img src='https://th.bing.com/th/id/OIP.f3DM2upCo-p_NPRwBAwbKQHaHa?pid=ImgDet&rs=1' width={50} height={50} />
            <h3>Aya Qunoo</h3>
          </div>
          <div className='chat-wraper'>
            <div className='conversation'>
              {msgs.map((msg) => (
                <Message message={msg} />
              ))}
            </div>
          </div>

          <div className='user_input'>
            <form>
              <Input placeholder="send message" />
              <Button type="primary" shape="round" icon={<SendOutlined />} />
            </form>
          </div>

        </Content>
      </Layout>
    </Layout>
  )
}

export default ChatBox