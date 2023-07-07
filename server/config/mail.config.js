require('dotenv').config();

const { USER, PASSWORD, PORT_STMP } = process.env;

module.exports = {
  user: USER,
  password: PASSWORD,
  port: PORT_STMP,
};
