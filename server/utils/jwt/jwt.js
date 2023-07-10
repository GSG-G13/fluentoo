const jwt = require('jsonwebtoken');
const {
  appConfig: {
    jwt: { SECRET },
  },
} = require('../../config');

const SignToken = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, SECRET, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});
const verifyToken = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) reject(err);
    resolve(decoded);
  });
});
module.exports = { SignToken, verifyToken };
