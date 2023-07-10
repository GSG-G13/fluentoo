const {
  addLangSchema,
  signupValidation,
  loginValidation,
  profileValidation,
  profileIdValidation,
} = require('./validation/index');
const generateEmail = require('./email/buildmailer');
const sendEmail = require('./email/nodemailer');
const { SignToken, verifyToken } = require('./jwt/jwt');
const { CustomError, makeArrayOfObjectsUnique } = require('./helper');

module.exports = {
  addLangSchema,
  signupValidation,
  loginValidation,
  SignToken,
  verifyToken,
  CustomError,
  profileValidation,
  profileIdValidation,
  generateEmail,
  sendEmail,
  makeArrayOfObjectsUnique,
};
