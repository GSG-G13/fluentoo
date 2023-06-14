const FeedBack = require('../../models/feedBack');
const { addFeedBackSchema } = require('../../utils/validation');

const addFeedBack = async (req, res, next) => {
  try {
    const { commenterUser } = req.user.id;
    const { comment, star, commentingUser } = req.body;
    const validFeedBack = addFeedBackSchema.validateAsync({
      comment, star, commentingUser, commenterUser,
    }, { abortEarly: false });

    const data = await FeedBack.create(validFeedBack);
    res.status(200).json({
      message: 'feedback added successfully',
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addFeedBack;
