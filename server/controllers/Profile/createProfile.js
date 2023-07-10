const { Profile } = require('../../models');
const { profileValidation, CustomError } = require('../../utils');

const createProfile = async (req, res, next) => {
  try {
    const { user: { id: userId }, body } = req;
    const ValidatedData = await profileValidation
      .validateAsync(
        { userId, ...body },
        { abortEarly: false },
      );
    const profileExist = await Profile.findOne({
      where: {
        userId,
      },
    });
    if (profileExist) {
      throw new CustomError('Profile already exists', 400);
    }
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
