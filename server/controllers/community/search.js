const { Op } = require('sequelize');
const { Profile, User, FeedBack } = require('../../models');
const sequelize = require('../../database/config/connection');

const search = async (req, res, next) => {
  const {
    name, spokenLanguages, practiceLanguages,
  } = req.query;

  const query = {
    include: [
      {
        model: FeedBack,
        attributes: [],
      },
      {
        model: Profile,
        attributes: ['id', 'spokenLanguages', 'country', 'avatar'],
      },
    ],
    attributes: [
      'id',
      'username',
      'email',
      [sequelize.fn('AVG', sequelize.col('feedbacks.star')), 'avgRating'],
    ],
    where: {
    },
    group: ['users.id', 'profile.id'],
  };

  if (name) {
    query.where = {
      username: {
        [Op.like]: `%${name}%`,
      },
    };
  }
  if (spokenLanguages) {
    query.where = {
      ...query.where,
      '$profile.spoken_languages$': {
        [Op.overlap]: `{${spokenLanguages}}`,
      },

    };
  }
  if (practiceLanguages) {
    query.where = {
      ...query.where,
      '$profile.practice_languages$': {
        [Op.overlap]: `{${practiceLanguages}}`,
      },
    };
  }

  try {
    const profiles = await User.findAll(query);
    return res.json({
      data: profiles,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = { search };
