const { Profile } = require('../../models');
const { CustomeError } = require('../../utils');
const { profileValidation } = require('../../utils');

const updateProfile = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { profileId } = req.params;

    const Validation = await profileValidation.validateAsync(
      {
        userId,
        ...req.body,
        profileId,
      },
      { abortEarly: false },
    );

    const existProfile = await Profile.findByPk(profileId);

    if (!existProfile) {
      throw new CustomeError('Profile not found', 404);
    }

    if (existProfile.userId !== userId) {
      throw new CustomeError('Not authorized', 401);
    }

    const [updatedRows, [updatedProfile]] = await Profile.update(
      { userId, ...Validation },
      {
        where: {
          id: profileId,
        },
        returning: true,
      },
    );

    if (updatedRows === 0) {
      throw new CustomeError('Updating failed', 400);
    }

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
