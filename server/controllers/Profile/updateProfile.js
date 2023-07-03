const { Profile } = require('../../models');
const { CustomeError } = require('../../utils');
const { profileValidation } = require('../../utils');

const updateProfile = async (req, res, next) => {
  try {
    const profileId = req.user.id;
    const Validation = await profileValidation.validateAsync(req.body, { abortEarly: false });
    const updatedProfile = await Profile.update({
      profileId, ...Validation,
    }, {
      where: {
        profileId,
      },
      returning: true,
    });
    if (!updatedProfile) {
      throw new CustomeError('updating faild');
    }
    return res.json({
      msg: 'profile updated successfully',
      status: 200,
      data: updatedProfile[1],
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = { updateProfile };
