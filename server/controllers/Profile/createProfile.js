const { Profile } = require('../../models');

const createProfile = async (req, res, next) => {
  try {
    const {
      gender,
      country,
      birthdate,
      practiceLanguages,
      spokenLanguages,
      interests,
      bio,
      avatar,
    } = req.body;
    const userId = req.user.id;
    const newProfile = await Profile.create({
      userId,
      gender,
      country,
      birthdate,
      practiceLanguages,
      spokenLanguages,
      interests,
      bio,
      avatar,
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
