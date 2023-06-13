const { compare } = require('bcrypt');
const { loginValidation } = require('../../utils/validation/user');
const { SignToken } = require('../../utils/jwt/jwt');
const { CustomeError } = require('../../utils/helper/customeError');
const User = require('../../models/user');

const login = async (req, res, next) => {
  try {
    const { email, password: pass } = await loginValidation
      .validateAsync(req.body, { abortEarly: false });

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      throw new CustomeError('Email doesnt exists', 401);
    }
    const { id, username, password } = user;
    const comparePassword = await compare(pass, password);

    if (!comparePassword) {
      return res.json('password incorrect');
    }
    const token = await SignToken({
      id,
      username,
      email,
    });

    return res.cookie('token', token).json({
      msg: 'login successfully',
      status: 200,
      data: {
        id,
        username,
        email,
      },
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = { login };
