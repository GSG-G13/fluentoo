const FeedBack = require('../../models/feedBack');
const { CustomError } = require('../../utils');
const { addFeedBackSchema } = require('../../utils/validation');

const updateFeedBack = async (req, res, next) => {
  try {
    const { commentId } = req.params;
    const feedbackContent = await FeedBack.findByPk(commentId);
    if (!feedbackContent) {
      throw new CustomError('Comment not found', 404);
    }
    const validUpdate = await addFeedBackSchema.validateAsync(...req.body, {
      abortEarly: false,
    });
    const updatedData = await FeedBack.update(
      { commentId, ...validUpdate },
      {
        where: {
          id: commentId,
        },
        returning: true,
      },
    );

    res.json({
      msg: 'Updated Successfully',
      status: 201,
      data: updatedData[1],
    });
  } catch (err) {
    next(err);
  }
};

module.exports = updateFeedBack;
