const FeedBack = require('../../models/feedBack');
const CustomeError = require('../../utils/helper/customeError');
const { addFeedBackSchema } = require('../../utils/validation');

const updataFeedBack = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const { comment, star } = req.body;

    const feedbackContent = await FeedBack.findByPk(commentId);
    if (!feedbackContent) {
      throw new CustomeError('Comment not found', 404);
    }

    const validUpdate = await addFeedBackSchema.validateAsync({
      comment, star,
    }, { abortEarly: false });

    const updatedData = await FeedBack.update({ commentId, ...validUpdate }, {
      where: {
        id: commentId,
      },
      returning: true,
    });

    if (!updatedData) {
      throw new CustomeError('Updating Faild', 500);
    }
    res.status(200).json({
      msg: 'updated successful',
      comment: updatedData[1],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = updataFeedBack;
