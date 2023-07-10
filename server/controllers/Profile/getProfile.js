const { Profile, User } = require('../../models');
const { CustomError, profileIdValidation } = require('../../utils');

const getProfile = async (req, res, next) => {
  try {
    const { userId } = req.params;
    await profileIdValidation.validateAsync({ userId }, { abortEarly: false });
    const profile = await Profile.findOne({
      where: {
        userId,
      },
      include: {
        model: User,
        attributes: ['id', 'username', 'email'],
      },
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
