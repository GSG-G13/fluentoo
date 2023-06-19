const { createProfile, updateProfile, getProfile } = require('./Profile');
const { createChat, getChat, getAllChats } = require('./chat');
const createMessage = require('./message');

module.exports = {
  createProfile, updateProfile, getProfile, createChat, getChat, getAllChats, createMessage,
};
