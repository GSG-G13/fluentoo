const FeedBack = require('../../models/feedBack');
const { CustomError } = require('../../utils');
const { addFeedBackSchema } = require('../../utils/validation');

const addFeedBack = async (req, res, next) => {
  try {
    const commenterId = req.user.id;
    const { commentingId } = req.params;
    if (commenterId === commentingId) throw new CustomError('You can not comment on yourself', 400);
    const validFeedBack = await addFeedBackSchema.validateAsync(req.body, { abortEarly: false });
    const data = await FeedBack.create({
      commenterId,
      commentingId,
      ...validFeedBack,
    });
    res.json({
      msg: 'Created Successfully',
      status: 201,
      data,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = addFeedBack;
