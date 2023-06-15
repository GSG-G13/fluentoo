const { Profile } = require('../../models');
const { profileValidation } = require('../../utils');

const createProfile = async (req, res, next) => {
  try {
    const { user: { id: userId }, body } = req;
    const Validation = await profileValidation
      .validateAsync(
        body,
        { abortEarly: false },
      );

    const newProfile = await Profile.create({
      userId, ...Validation,
    });

    return res.json({
      msg: 'profile created successfully',
      status: 201,
      data: newProfile,
    });
  } catch (err) {
    return next(err);
  }
};
module.exports = { createProfile };
