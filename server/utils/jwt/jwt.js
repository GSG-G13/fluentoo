const jwt = require('jsonwebtoken');

const { SECRET } = process.env;
const SignToken = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, SECRET, (err, token) => {
    if (err) reject(err);
    resolve(token);
  });
});
const verfiyToken = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) reject(err);
    resolve(decoded);
  });
});
module.exports = { SignToken, verfiyToken };
