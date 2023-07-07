const { FeedBack, User } = require('../../models');

const getAllFeedBack = async (req, res, next) => {
  try {
    const { commentingId } = req.params;
    const data = await FeedBack.findAll({
      where: {
        commenting_id: commentingId,
      },
      include: [
        {
          model: User,
          attributes: ['id', 'username'],
        },
      ],
    });
    res.json({
      msg: 'Feedbacks Returned Successfully',
      status: 200,
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllFeedBack;
