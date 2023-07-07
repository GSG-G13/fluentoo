require('dotenv').config();

const { GOOGLE_USER, PASSWORD, PORT_STMP } = process.env;

module.exports = {
  user: GOOGLE_USER,
  password: PASSWORD,
  port: PORT_STMP,
};
