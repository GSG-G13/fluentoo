const { Profile } = require('../../models');
const { CustomeError } = require('../../utils');
const { profileValidation } = require('../../utils');

const updateProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const id = req.params.profileId;
    const Validation = await profileValidation.validateAsync(req.body, { abortEarly: false });
    const updatedProfile = await Profile.update({
      userId, ...Validation,
    }, {
      where: {
        id,
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
