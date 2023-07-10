const { createProfile, updateProfile, getProfile } = require('./Profile');
const { search } = require('./community');
const {
  createMessage,
  readMessage,
  deleteMessage,
  updateMessage,
  findAllContacts,
} = require('./message');
const { createLanguage, getAllLanguages } = require('./language');
const { getQuiz, updateUserLevel } = require('./quiz');
const {
  getAllFeedBack,
  addFeedBack,
  deleteFeedBack,
  updateFeedBack,
  totalRate,
} = require('./feedBack');
const { login, signUp, oauth } = require('./User');

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
  getQuiz,
  updateUserLevel,
  findAllContacts,
  getAllFeedBack,
  addFeedBack,
  deleteFeedBack,
  updateFeedBack,
  totalRate,
  login,
  signUp,
  oauth,
};
