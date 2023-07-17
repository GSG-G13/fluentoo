const { User, Profile, Question } = require('../../models');
const { CustomError } = require('../../utils');

const updateUserLevel = async (req, res, next) => {
  try {
    const quizLanguage = req.params.quizLanguage.toLowerCase();
    const { quizId, quizAnswers } = req.body;
    const { id: userId } = req.user;
    let userLevel = 0;

    const userExist = await User.findByPk(
      userId,
      {
        include: {
          model: Profile,
          attributes: ['practiceLanguages'],
        },
      },
    );

    if (!userExist) {
      throw new CustomError('User not found', 404);
    } else if (!userExist.profile) {
      throw new CustomError('Profile not found', 404);
    }

    const inPracticeLanguages = userExist.profile.practiceLanguages
      .some((language) => language === quizLanguage);

    if (!inPracticeLanguages) {
      throw new CustomError('Choosen Language is not from your practice languages', 400);
    }

    const levelObjects = JSON.parse(userExist.levels);

    const userLevelObject = levelObjects
      .find((levelObject) => levelObject.language === quizLanguage);

    if (userLevelObject) {
      userLevel = userLevelObject.level;
    } else {
      levelObjects.push({ language: quizLanguage, level: 0 });
      await User.update(
        { levels: JSON.stringify(levelObjects) },
        {
          where: {
            id: userId,
          },
        },
      );
    }

    if (userLevel + 1 !== quizId) {
      throw new CustomError('Your level is not suitable with this quiz', 400);
    }

    const quizCorrectAnswers = await Question.findAndCountAll({
      where: {
        quizId,
      },
      attributes: ['correctOption'],
    });

    if (quizCorrectAnswers.count === 0) {
      throw new CustomError('You already reached max level', 400);
    }

    let result = 0;
    quizCorrectAnswers.rows.forEach((correctAnswer, i) => {
      if (correctAnswer.correctOption === quizAnswers[i]) {
        result += 1;
      }
    });

    if (result > quizCorrectAnswers.count / 2) {
      const updatedLevelObjects = levelObjects
        .map((levelObject) => ({
          ...levelObject,
          level: levelObject.language === quizLanguage ? levelObject.level + 1 : levelObject.level,
        }));

      userExist.levels = JSON.stringify(updatedLevelObjects);
      await userExist.save();

      return res.json({
        msg: 'Level Updated Successfully',
        status: 200,
        data: {
          correctAnswers: result,
          examResult: 'success',
        },
      });
    }

    return res.json({
      msg: 'Data Returned Successfully',
      status: 200,
      data: {
        correctAnswers: result,
        examResult: 'fail',
      },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { updateUserLevel };
