require('dotenv').config();

const { GOOGLE_SECRET, GOOGLE_ID } = process.env;

module.export = { googleSecret: GOOGLE_SECRET, googleId: GOOGLE_ID };
