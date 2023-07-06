const { Profile } = require('../../models');
const { profileValidation } = require('../../utils');

const createProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const validatedData = await profileValidation.validateAsync(
      req.body,
      { abortEarly: false },
    );

    const newProfile = await Profile.create({ userId, ...validatedData });

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
