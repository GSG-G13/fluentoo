const { Profile, User } = require('../../models');
const { CustomeError } = require('../../utils');

const getProfile = async (req, res, next) => {
  try {
    const { profileId } = req.params;
    let profile;
    if (profileId) {
      profile = await Profile.findByPk(profileId, {
        include: [
          {
            model: User,
          },
        ],
      });
      if (!profile) {
        throw new CustomeError('Profile not found', 404);
      }
    } else {
      profile = await Profile.findAll({
        include: [
          {
            model: User,
          },
        ],
      });
    }
    return res.json({
      status: 200,
      data: profile,
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = { getProfile };
