/* eslint-disable no-param-reassign */
const cookie = require('cookie');
const { WebSocketServer } = require('ws');
const server = require('..');
const { verfiyToken } = require('../utils');

const wss = new WebSocketServer({ server });

const assignClient = async (connection, req) => {
  const cookies = req.headers.cookie;
  const { token } = cookie.parse(cookies);
  const decoded = await verfiyToken(token);
  connection.userId = decoded.id;
  connection.userName = decoded.username;
};

const getOnlineUsers = async () => {
  const onlineUsers = [...wss.clients]
    .map((client) => ({ userId: client.userId, userName: client.userName }));

  [...wss.clients].forEach((client) => {
    client.send(JSON.stringify({ onlineUsers }));
  });
};

const sendMessage = async (receivedMessage) => {
  const { text, recipient } = receivedMessage.message;
  [...wss.clients].forEach((client) => {
    if (client.userId === recipient) {
      client.send(JSON.stringify({ text }));
    }
  });
};

wss.on(('connection'), async (connection, req) => {
  await assignClient(connection, req);

  getOnlineUsers();

  connection.on('message', (message) => {
    const receivedMessage = JSON.parse(message.toString());

    if ('message' in receivedMessage) {
      sendMessage(receivedMessage);
    }
  });
});
