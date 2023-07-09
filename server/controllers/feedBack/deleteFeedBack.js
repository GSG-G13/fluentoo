const FeedBack = require('../../models/feedBack');
const { CustomError } = require('../../utils');

const deleteFeedBack = async (req, res, next) => {
  try {
    const { feedbackId } = req.body;
    const feedback = await FeedBack.findByPk(feedbackId);
    if (!feedback) {
      throw new CustomError('Feedback not found', 404);
    }
    await feedback.destroy();
    res.json({
      msg: 'Deleted Successfully',
      status: 200,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deleteFeedBack;
