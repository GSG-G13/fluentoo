require('dotenv').config();

const { GOOGLE_USER, PASSWORD, PORT_STMP } = process.env;

module.exports = {
  user: GOOGLE_USER || 'fluentoedu@gmail.com',
  password: PASSWORD || 'evmqlkphqbndkjqs',
  port: PORT_STMP || 587,
};
