const FeedBack = require('../../models/feedBack');

const getAllFeedBack = async (req, res, next) => {
  try {
    const { commentingId } = req.params;
    const data = await FeedBack.findAll({
      where: {
        commentingId,
      },
    });
    res.status(200).json({ data });
  } catch (err) {
    next(err);
  }
};

module.exports = getAllFeedBack;
