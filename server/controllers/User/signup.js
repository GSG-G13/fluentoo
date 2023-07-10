const { hash } = require('bcrypt');
const {
  SignToken, CustomError, signupValidation, generateEmail, sendEmail,
} = require('../../utils');
const { User } = require('../../models');

const signUp = async (req, res, next) => {
  try {
    const { username, email, password } = await signupValidation.validateAsync(
      req.body,
      { abortEarly: false },
    );

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new CustomError('Email already exists', 400);
    }

    const hashedPassword = await hash(password, 10);
    const {
      username: name,
      email: useremail,
      id,
    } = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const { emailBody, emailText } = generateEmail(username);
    sendEmail(email, 'sign up sucsessfully', emailBody, emailText);
    const user = { name, useremail, id };
    const token = await SignToken({
      id,
      username,
      email,
    });

    return res.cookie('token', token).json({
      msg: 'Signup successfully',
      status: 201,
      data: user,
      token,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { signUp };
