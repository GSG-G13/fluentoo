const { Profile } = require('../../models');
const { CustomError } = require('../../utils');
const { profileValidation } = require('../../utils');

const updateProfile = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const Validation = await profileValidation.validateAsync(
      {
        userId,
        ...req.body,
      },
      { abortEarly: false },
    );

    const existProfile = await Profile.findOne({
      where: {
        userId,
      },
    });

    if (!existProfile) {
      throw new CustomError('Profile not found', 404);
    }

    const [, [updatedProfile]] = await Profile.update(
      { userId, ...Validation },
      {
        where: {
          userId,
        },
        returning: true,
      },
    );
    return res.json({
      msg: 'Profile updated successfully',
      status: 200,
      data: updatedProfile,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { updateProfile };
