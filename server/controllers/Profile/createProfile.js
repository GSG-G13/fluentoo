const { Profile } = require('../../models');
const { profileValidation, CustomeError } = require('../../utils');

const createProfile = async (req, res, next) => {
  try {
    const { user: { id: userId }, body } = req;
    const existingProfile = await Profile.findOne({ where: { userId } });

    if (existingProfile) {
      throw new CustomeError('profile already exists!', 404);
    }
    const ValidatedData = await profileValidation
      .validateAsync(
        { userId, ...body },
        { abortEarly: false },
      );

    const newProfile = await Profile.create(ValidatedData);
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
