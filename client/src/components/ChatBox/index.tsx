import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { useAuthContext } from '../../context/AuthContext';
import { UserObjectType, MessageObjectType } from '../../utils';
import './style.modules.css'
const { Content, Sider } = Layout;
import {
  MessagesSiderHead,
  ChooseChatButton,
  User,
  Message,
  ChatUserHead,
  SendMessageForm
} from '..';

function ChatBox() {
  const { user: { userId: loggedInUserId } } = useAuthContext();
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [text, setText] = useState("");
  const [onlineUsers, setOnlineUsers] = useState<UserObjectType[]>([]);
  const [allMessages, setAllMessages] = useState<MessageObjectType[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserObjectType>({
    userId: 0,
    userName: '',
  });

  const makeArrayOfObjectsUnique = (arr: UserObjectType[]) => {
    const uniqueArray: UserObjectType[] = [];
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:5000');
    setWs(ws);

    ws.addEventListener('message', (message) => {
      const receivedMessage = JSON.parse(message.data);

      if ('onlineUsers' in receivedMessage) {
        const uniqueOnlineUsers: UserObjectType[] = makeArrayOfObjectsUnique(receivedMessage.onlineUsers);
        setOnlineUsers(uniqueOnlineUsers);
      } else if ('text' in receivedMessage) {
        const { text } = receivedMessage;
        setAllMessages((prev) => [...prev, { text, isOur: false }]);
      }
    })
  }, []);

  const handleSendMessage = () => {
    if (ws) {
      ws.send(JSON.stringify({ message: { text, recipient: selectedUser.userId } }))
      setAllMessages((prevMessages) => [...prevMessages, { text, isOur: true }]);
    }
  }

  const onlineUsersElements = onlineUsers
    .filter((user) => user.userId !== loggedInUserId)
    .map((user) => <User key={user.userId} selectedUser={selectedUser} setSelectedUser={setSelectedUser} user={user} />);

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
          <MessagesSiderHead collapsed={collapsed} setCollapsed={setCollapsed} />
          <div className='users-box'>
            {onlineUsers && onlineUsersElements}
          </div>
        </Content>
      </Sider>
      <Layout className="site-layout">
        {selectedUser.userId === 0 && <ChooseChatButton collapsed={collapsed} setCollapsed={setCollapsed} />}

        {selectedUser.userId > 0 && (
          <Content>
            <ChatUserHead
              selectedUser={selectedUser}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />

            <div className='chat-wraper'>
              <div className='conversation'>
                {allMessages.map((message, i) => <Message key={i} text={message.text} isOur={message.isOur} />)}
              </div>
            </div>

            <SendMessageForm text={text} setText={setText} handleSendMessage={handleSendMessage} />
          </Content>
        )}
      </Layout>
    </Layout >
  )
}

export default ChatBox;