const {
  Quiz,
  Question,
  User,
  Language,
} = require('../../models');
const { CustomError } = require('../../utils');

const getQuiz = async (req, res, next) => {
  const { quizLanguage } = req.params;
  const { id: userId } = req.user;
  let userLevel = 0;

  try {
    const languageExist = await Language.findOne({
      where: {
        name: quizLanguage.toLowerCase(),
      },
    });

    if (!languageExist) {
      throw new CustomError('Language not found', 404);
    }

    const userExist = await User.findByPk(userId);

    if (!userExist) {
      throw new CustomError('User not found', 404);
    }

    const levelObjects = JSON.parse(userExist.levels);

    const userLevelObject = levelObjects
      .find((levelObject) => levelObject.language === quizLanguage);

    if (userLevelObject) {
      userLevel = userLevelObject.level;
    } else {
      userLevel = 0;
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

    const quizzesNumber = await Quiz.count({
      where: {
        language: quizLanguage,
      },
    });

    if (+userLevel === quizzesNumber) {
      return res.json({
        msg: 'Quizzes Number Returned Successfully',
        status: 200,
        data: quizzesNumber,
      });
    }

    const quiz = await Quiz.findOne({
      include: {
        model: Question,
        attributes: ['questionText', 'options', 'correctOption'],
      },
      where: {
        language: quizLanguage.toLowerCase(),
      },
      attributes: ['language', 'level'],
      order: [['id', 'ASC']],
      offset: userLevel,
      limit: 1,
    });

    return res.json({
      msg: 'Quiz Returned Successfully',
      status: 200,
      data: { userLevels: userExist.levels, quizzesNumber, quiz },
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getQuiz };
