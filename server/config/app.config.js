require('dotenv').config();

const app = {
  port: 5000,
  isProduction: process.env.NODE_ENV === 'production',
  debug: process.env.NODE_ENV !== 'production',
  jwt: {
    SECRET: process.env.SECRET || 'fluentoo',
    expiresIn: '1d',
  },
  cookies: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
    secure: false,
  },
};

module.exports = app;
