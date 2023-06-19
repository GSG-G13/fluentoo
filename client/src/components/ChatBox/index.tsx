import React, { useState, useEffect } from 'react';
import InputEmoji from 'react-input-emoji';
import './style.modules.css'
import { Layout, Input, Button } from 'antd';
import { SearchOutlined, SendOutlined, MenuOutlined } from '@ant-design/icons';
import Message from '../Message';
import User from '../User';
const { Content, Sider } = Layout;

function ChatBox() {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [text, setText] = useState("");

  const handleOnEnter = (text: string) => {
    console.log(text);

  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        width={isMobile ? '100%' : 350}
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth={0}
      >
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className='sider-head'>
            <h2>Messages</h2>
            {collapsed || (
              <Button
                className='burger-menu'
                type="text"
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
          <Input size="large" placeholder="Search for a friend" prefix={<SearchOutlined />} />
          <div className='users-box'>
            <User />
          </div>
        </Content>
      </Sider>
      <Layout className="site-layout">

        <Content>
          <div className='user-header'>
            {collapsed && (
              <Button
                className='burger-menu'
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}
              />
            )}
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
              <InputEmoji
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
              <Button type="primary" shape="round" icon={<SendOutlined />} />
            </form>
          </div>

        </Content>
      </Layout>
    </Layout >
  )
}

export default ChatBox;