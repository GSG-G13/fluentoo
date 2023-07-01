const env = process.argv[2] || 'development';
const sequelize = require('../connection');
const {
  USERS, LANGUAGES, PROFILES, MESSAGES, FEEDBACKS,
} = require('../faker');
const {
  User, Language, Profile, Message, FeedBack,
} = require('../../models');

const seeder = async () => {
  try {
    await sequelize.sync({ force: env !== 'production' });
    await User.bulkCreate(USERS);
    await Language.bulkCreate(LANGUAGES);
    await Profile.bulkCreate(PROFILES);
    await FeedBack.bulkCreate(FEEDBACKS);
    await Message.bulkCreate(MESSAGES);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
};
seeder();
