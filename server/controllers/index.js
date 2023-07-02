const { createProfile, updateProfile, getProfile } = require('./Profile');
const { search } = require('./community');
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
  search,
  createLanguage,
  getAllLanguages,
};
