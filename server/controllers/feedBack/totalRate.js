const { FeedBack } = require('../../models');
const sequelize = require('../../database/connection');

const totalRate = async (req, res, next) => {
  try {
    const { commentingId } = req.params;

    const total = await FeedBack.findAll({
      where: {
        commentingId,
      },
      attributes: [
        [sequelize.fn('AVG', sequelize.col('star')), 'avgRating'],
        [sequelize.fn('COUNT', sequelize.col('comment')), 'commentsCount'],
        [
          sequelize.literal('SUM(CASE WHEN star = 1 THEN 1 ELSE 0 END)'),
          '1stars',
        ],
        [
          sequelize.literal('SUM(CASE WHEN star = 2 THEN 1 ELSE 0 END)'),
          '2stars',
        ],
        [
          sequelize.literal('SUM(CASE WHEN star = 3 THEN 1 ELSE 0 END)'),
          '3stars',
        ],
        [
          sequelize.literal('SUM(CASE WHEN star = 4 THEN 1 ELSE 0 END)'),
          '4stars',
        ],
        [
          sequelize.literal('SUM(CASE WHEN star = 5 THEN 1 ELSE 0 END)'),
          '5stars',
        ],
      ],
    });
    res.status(200).json({
      msg: 'Total Rate Returned Successfully',
      status: 200,
      total,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = totalRate;
