const addFeedBackSchema = require('./feedBack/addFeedBackSchema');
const addLangSchema = require('./language/addLanguageSchema');
const { signupValidation, loginValidation } = require('./user');
const { profileValidation, profileIdValidation } = require('./profile');

module.exports = {
  addLangSchema,
  signupValidation,
  loginValidation,
  addFeedBackSchema,
  profileValidation,
  profileIdValidation,
};
