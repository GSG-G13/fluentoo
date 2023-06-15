const { Profile } = require('../../models');
const { CustomeError } = require('../../utils');

const updateProfile = async (req, res, next) => {
  try {
    const {
      gender,
      country,
      birthdate,
      practiceLanguages,
      spokenLanguages,
      intrests,
      bio,
      avatar,
    } = req.body;

    const userId = req.user.id;
    const id = req.params.profileId;
    const updatedProfile = await Profile.update({
      userId,
      gender,
      country,
      birthdate,
      practice_languages: practiceLanguages,
      spoken_languages: spokenLanguages,
      intrests,
      bio,
      avatar,
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
