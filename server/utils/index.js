const {
  addLangSchema,
  signupValidation,
  loginValidation,
  profileValidation,
  profileIdValidation,
} = require('./validation/index');
const { SignToken, verfiyToken } = require('./jwt/jwt');
const { CustomError } = require('./helper');
const genarateEmail = require('./email/buildmailer');
const sendEmail = require('./email/nodemailer');

module.exports = {
  addLangSchema,
  signupValidation,
  loginValidation,
  SignToken,
  verfiyToken,
  CustomError,
  profileValidation,
  profileIdValidation,
  genarateEmail,
  sendEmail,
};
