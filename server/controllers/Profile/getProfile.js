const { Profile, User } = require('../../models');

const getProfile = async (req, res, next) => {
  try {
    const { profileId } = req.params;
    const profile = await Profile.findByPk(profileId, {
      include: [
        {
          model: User,
        },
      ],
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
