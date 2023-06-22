const { createProfile, updateProfile, getProfile } = require('./Profile');
const search = require('./community/search');
const {
  createMessage,
  readMessage,
  deleteMessage,
  updateMessage,
} = require('./message');

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
  createMessage,
  readMessage,
  deleteMessage,
  updateMessage,
  search,
};
