const { FeedBack } = require('../../models');

const getAllFeedBack = async (req, res, next) => {
  try {
    const { commentingId } = req.params;
    const data = await FeedBack.findAll({
      where: {
        commentingId,
      },
      limit: 5,
    });
    res.status(200).json({
      msg: 'Feedbacks Returned Successfully',
      status: 200,
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllFeedBack;
