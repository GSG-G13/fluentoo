// eslint-disable-next-line no-unused-vars
const env = process.argv[2] || process.env.NODE_ENV || 'development';
const sequelize = require('../connection');
const {
  USERS, LANGUAGES, PROFILES, MESSAGES, FEEDBACKS, QUIZZES, QUESTIONS,
} = require('../faker');
const {
  User, Language, Profile, Message, FeedBack, Quiz, Question,
} = require('../../models');

const seeder = async () => {
  try {
    await sequelize.sync({ force: env !== 'production' });
    await User.bulkCreate(USERS);
    await Language.bulkCreate(LANGUAGES);
    await Profile.bulkCreate(PROFILES);
    await FeedBack.bulkCreate(FEEDBACKS);
    await Message.bulkCreate(MESSAGES);
    await Quiz.bulkCreate(QUIZZES);
    await Question.bulkCreate(QUESTIONS);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
seeder();
module.exports = seeder;
