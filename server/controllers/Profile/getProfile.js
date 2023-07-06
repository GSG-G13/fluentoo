const { Profile, User } = require('../../models');

const getProfile = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const profile = await Profile.findAll({
      where: {
        userId,
      },
      include: {
        model: User,
        attributes: ['id', 'username', 'email'],
      },
    });
    return res.json({
      status: 200,
      data: profile,
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = { getProfile };
