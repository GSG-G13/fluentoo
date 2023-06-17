const { login } = require('./login');
const { signUp } = require('./signup');
const { oauth } = require('./oauth');
const { profileData } = require('./profileData');

module.exports = {
  login,
  signUp,
  oauth,
  profileData,
};
