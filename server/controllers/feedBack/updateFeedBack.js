const FeedBack = require('../../models/feedBack');
const { addFeedBackSchema } = require('../../utils/validation');

const updataFeedBack = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const { comment, star } = req.body;

    const validUpdate = await addFeedBackSchema.validateAsync({
      comment, star,
    }, { abortEarly: false });

    const updatedData = FeedBack.update({ commentId, ...validUpdate }, {
      where: {
        id: commentId,
      },
    });
    res.status(200).json({
      msg: 'updated successful',
      updatedData,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = updataFeedBack;
