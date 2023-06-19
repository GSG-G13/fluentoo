import React, { useState, useEffect } from 'react';
import InputEmoji from 'react-input-emoji';
import './style.modules.css'
import { Layout, Input, Button } from 'antd';
import { SearchOutlined, SendOutlined, MenuOutlined } from '@ant-design/icons';
import Message from '../Message';
import User from '../User';
import { useAuthContext } from '../../context/AuthContext';
const { Content, Sider } = Layout;

interface onlineUsersObjectType {
  userId: number;
  userName: string;
}

function ChatBox() {
  const { user: { userId: loggedInUserId } } = useAuthContext();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ws, setWs] = useState(null);
  const [text, setText] = useState("");
  const [onlineUsers, setOnlineUsers] = useState<onlineUsersObjectType[]>([]);
  const [selectedUser, setSelectedUser] = useState<onlineUsersObjectType>({
    userId: 0,
    userName: "",
  });
  const [allMessages, setAllMessages] = useState([]);

  const makeArrayOfObjectsUnique = (arr: onlineUsersObjectType[]) => {
    const uniqueArray: onlineUsersObjectType[] = [];
    const keysSet: Set<number> = new Set();
    for (const obj of arr) {
      const key = obj["userId"];
      if (!keysSet.has(key)) {
        keysSet.add(key);
        uniqueArray.push(obj);
      }
    }

    return uniqueArray;
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');
    setWs(ws);
    ws.addEventListener('message', (message) => {
      const receivedMessage = JSON.parse(message.data);

      if ('onlineUsers' in receivedMessage) {
        const uniqueOnlineUsers: onlineUsersObjectType[] = makeArrayOfObjectsUnique(receivedMessage.onlineUsers);
        setOnlineUsers(uniqueOnlineUsers);
      }
      else if ('text' in receivedMessage) {
        const { text } = receivedMessage;
        setAllMessages((prev) => [...prev, { text, isOur: false }]);
      }
    })
  }, []);

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

  const handleSendMessage = () => {
    ws.send(JSON.stringify({ message: { text, recipient: selectedUser.userId } }))
    setAllMessages((prev) => [...prev, { text, isOur: true }]);
  }

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
            {onlineUsers && onlineUsers.filter((user) => user.userId !== loggedInUserId).map((user) => <User key={user.userId} selectedUser={selectedUser} setSelectedUser={setSelectedUser} user={user} />)}
          </div>
        </Content>
      </Sider>
      <Layout className="site-layout">

        {selectedUser.userId === 0 && (
          <div onClick={() => setCollapsed(!collapsed)}>chose chat</div>
        )}
        {selectedUser.userId > 0 && (
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
              <h3>{selectedUser.userName}</h3>
            </div>
            <div className='chat-wraper'>
              <div className='conversation'>
                {allMessages.map((message, i) => <Message key={i} message={message} />)}
              </div>
            </div>

            <div className='user_input'>
              <form> {/* should be on submit */}
                <InputEmoji
                  value={text}
                  onChange={setText}
                  cleanOnEnter
                  placeholder="Type a message"
                />
                <Button type="primary" shape="round" onClick={handleSendMessage} icon={<SendOutlined />} />
              </form>
            </div>

          </Content>
        )}

      </Layout>
    </Layout >
  )
}

export default ChatBox;