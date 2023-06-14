const FeedBack = require('../../models/feedBack');

const getAllFeedBack = async (req, res, next) => {
  try {
    const feedBack = await FeedBack.findAll();
    res.status(200).json(feedBack);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllFeedBack;
