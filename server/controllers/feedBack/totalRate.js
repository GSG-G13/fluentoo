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
        [sequelize.fn('AVG', sequelize.col('feedbacks.star')), 'avgRating'],

        [sequelize.fn('COUNT', sequelize.col('feedbacks.comment')), 'commentsCount'],
      ],
    });

    const totalStars = await FeedBack.findAll({
      where: {
        commentingId,
      },
      attributes: [
        [sequelize.fn('COUNT', sequelize.literal('CASE WHEN star = 1 THEN 1 END')), '1stars'],
        [sequelize.fn('COUNT', sequelize.literal('CASE WHEN star = 2 THEN 1 END')), '2stars'],
        [sequelize.fn('COUNT', sequelize.literal('CASE WHEN star = 3 THEN 1 END')), '3stars'],
        [sequelize.fn('COUNT', sequelize.literal('CASE WHEN star = 4 THEN 1 END')), '4stars'],
        [sequelize.fn('COUNT', sequelize.literal('CASE WHEN star = 5 THEN 1 END')), '5stars'],
      ],
    });
    res.status(200).json({
      msg: 'Total Rate Returned Successfully',
      status: 200,
      total,
      totalStars,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = totalRate;
