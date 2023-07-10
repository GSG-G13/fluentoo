const databaseConfig = require('./database.config');
const { googleId, googleSecret } = require('./google.config');
const appConfig = require('./app.config');
const { user, password, port } = require('./mail.config');

module.exports = {
  databaseConfig,
  googleId,
  googleSecret,
  appConfig,
  user,
  password,
  port,
};
