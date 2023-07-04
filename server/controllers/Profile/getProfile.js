const { Profile, User } = require('../../models');

const getProfile = async (req, res, next) => {
  try {
    const { profileId } = req.params;
    const profile = await Profile.findAll({
      where: {
        profileId,
      },
      include: {
        model: User,
        attributes: ['id', 'username'],
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
