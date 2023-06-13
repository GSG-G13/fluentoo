const { OAuth2Client } = require('google-auth-library');
const { SignToken } = require('../../utils/jwt/jwt');

const { GOOGLE_ID } = process.env;
const User = require('../../models/user');

const client = new OAuth2Client(GOOGLE_ID);

const oauth = async (req, res) => {
  const { token: googleToken } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: googleToken,
      audience: GOOGLE_ID,
    });

    const { email, name } = ticket.getPayload();

    const existingUser = User.findOne({
      where: {
        email,
      },
    });
    if (!existingUser) {
      // eslint-disable-next-line no-unused-vars
      const user = await User.create({
        username: name,
        email,
      });
    }
    const token = await SignToken({
      id: existingUser.id,
      name,
      email,
    });
    return res.cookie('token', token)
      .json({
        msg: 'authenticated sucssfully',
        status: 201,
      });
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed' });
  }
};
module.exports = { oauth };
