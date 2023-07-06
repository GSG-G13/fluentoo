const { OAuth2Client } = require('google-auth-library');
const { SignToken } = require('../../utils');

const { googleId: GOOGLE_ID } = require('../../config');
const { User } = require('../../models');

const client = new OAuth2Client(GOOGLE_ID);

const oauth = async (req, res, next) => {
  const { token: googleToken } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: GOOGLE_ID,
    });

    const { email, name } = ticket.getPayload();

    const user = await User.findOrCreate({
      where: { email },
      defaults: { username: name, email },
    });
    const token = await SignToken({
      id: user.id,
      name,
      email,
    });
    return res.cookie('token', token)
      .json({
        msg: 'authenticated successfully',
        status: 201,
        data: user,
      });
  } catch (error) {
    return next(error);
  }
};
module.exports = { oauth };
