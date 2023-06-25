require('dotenv').config();

const { GOOGLE_SECRET, GOOGLE_ID } = process.env;

module.exports = {
  googleSecret: GOOGLE_SECRET || 'GOOGLE_SECRET',
  googleId: GOOGLE_ID || 'GOOGLE_ID',
};
