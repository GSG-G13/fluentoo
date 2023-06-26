const { createProfile, updateProfile, getProfile } = require('./Profile');
const {
  createMessage,
  readMessage,
  deleteMessage,
  updateMessage,
} = require('./message');
const { createLanguage, getAllLanguages } = require('./language');

module.exports = {
  createProfile,
  updateProfile,
  getProfile,
  createMessage,
  readMessage,
  deleteMessage,
  updateMessage,
  createLanguage,
  getAllLanguages,
};
