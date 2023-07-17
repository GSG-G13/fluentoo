const {
  Quiz,
  Question,
  User,
  Profile,
} = require('../../models');
const { CustomError } = require('../../utils');

const getQuiz = async (req, res, next) => {
  try {
    const quizLanguage = req.params.quizLanguage.toLowerCase();
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
      where: {
        language: quizLanguage,
      },
      attributes: ['id', 'language', 'level'],
      include: {
        model: Question,
        attributes: ['questionText', 'options'],
      },
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
