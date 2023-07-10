const { compare } = require('bcrypt');
const { loginValidation, SignToken, CustomError } = require('../../utils');
const { User, Profile } = require('../../models');

const login = async (req, res, next) => {
  try {
    const { email, password } = await loginValidation.validateAsync(req.body, {
      abortEarly: false,
    });

    const user = await User.findOne({
      where: {
        email,
      },
      include: [
        {
          model: Profile,
        },
      ],
    });

    if (!user) {
      throw new CustomError('Email doesn\'t exists', 401);
    }
    const { id, username, password: hashedPassword } = user;
    const match = await compare(password, hashedPassword);

    if (!match) {
      throw new CustomError('password or email incorrect', 400);
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
        profile: user.profile,
      },
      token,
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = { login };
