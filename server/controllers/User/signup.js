const { hash } = require('bcrypt');
const {
  SignToken,
  CustomeError,
  signupValidation,
} = require('../../utils');
const { User } = require('../../models');

const signUp = async (req, res, next) => {
  try {
    const {
      password,
      username,
      email,
    } = await signupValidation.validateAsync(req.body, { abortEarly: false });

    const existingUser = await User.findOne({
      where: {
        email,
      },
    });

    if (existingUser) {
      throw new CustomeError('Email already exists', 400);
    }

    const hashedPassword = await hash(password, 10);
    const { username: name, email: useremail, id } = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const user = { name, useremail };
    const token = await SignToken({
      id,
      username,
      email,
    });

    return res.cookie('token', token)
      .json({
        msg: 'Signup successfully',
        status: 201,
        data: user,
      });
  } catch (err) {
    return next(err);
  }
};

module.exports = { signUp };
