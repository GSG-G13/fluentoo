const FeedBack = require('../../models/feedBack');

const deleteFeedBack = async (req, res, next) => {
  try {
    const { feedbackId } = req.body;
    const feedback = await FeedBack.findByPk(feedbackId);
    await feedback.destroy();
    res.status(200).json({
      msg: 'Deleted successful',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteFeedBack;