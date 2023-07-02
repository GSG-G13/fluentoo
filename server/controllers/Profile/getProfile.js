const { Profile, User } = require('../../models');
const { CustomError, profileIdValidation } = require('../../utils');

const getProfile = async (req, res, next) => {
  try {
    const { profileId } = req.params;
    await profileIdValidation.validateAsync(
      { profileId },
      { abortEarly: false },
    );
    const profile = await Profile.findByPk(profileId, {
      include: [
        {
          model: User,
        },
      ],
    });
    if (!profile) {
      throw new CustomError('Profile not found', 404);
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
