const addLangSchema = require('./language/addLanguageSchema');
const { signupValidation, loginValidation } = require('./user');

module.exports = {
  addLangSchema,
  signupValidation,
  loginValidation,
};
