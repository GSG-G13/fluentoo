const FeedBack = require('../../models/feedBack');
const { addFeedBackSchema } = require('../../utils/validation');

const addFeedBack = async (req, res, next) => {
  try {
    const commenterId = req.user.id;
    const { commentingId } = req.params;
    const { comment, star } = req.body;
    const validFeedBack = await addFeedBackSchema.validateAsync({
      comment, star,
    }, { abortEarly: false });

    const data = await FeedBack.create({ commenterId, commentingId, ...validFeedBack });
    res.status(201).json({
      msg: 'created successfully',
      status: 201,
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addFeedBack;
