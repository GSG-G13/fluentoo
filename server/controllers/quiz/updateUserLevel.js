const { User, Quiz } = require('../../models');
const { CustomError } = require('../../utils');

const updateUserLevel = async (req, res, next) => {
  const { quizLanguage } = req.params;
  const { id: userId } = req.user;

  try {
    const userExist = await User.findByPk(userId);

    if (!userExist) {
      throw new CustomError('User not found', 404);
    }

    const levelObjects = JSON.parse(userExist.levels);

    const userLevelObject = levelObjects
      .find((levelObject) => levelObject.language === quizLanguage);

    if (!userLevelObject) {
      throw new CustomError('Did not start any quiz in this language', 404);
    }

    const quizzesNumber = await Quiz.count({
      where: {
        language: quizLanguage,
      },
    });

    if (userLevelObject.level >= quizzesNumber) {
      throw new CustomError('You already reached max level', 404);
    }

    const updatedLevelObjects = levelObjects
      .map((levelObject) => ({
        ...levelObject,
        level: levelObject.language === quizLanguage ? levelObject.level + 1 : levelObject.level,
      }));

    await User.update(
      { levels: JSON.stringify(updatedLevelObjects) },
      {
        where: {
          id: userId,
        },
      },
    );

    return res.json({
      msg: 'Updated Successfully',
      status: 200,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { updateUserLevel };
