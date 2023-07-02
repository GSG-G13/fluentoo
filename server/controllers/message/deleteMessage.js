const { Message } = require('../../models');
const { CustomError } = require('../../utils');

const deleteMessage = async (req, res, next) => {
  const { id } = req.params;
  try {
    const message = await Message.findByPk(id);
    if (!message) {
      throw new CustomError('Message not found', 404);
    }
    const rowsAffected = await Message.destroy({
      where: {
        id,
      },
    });
    if (rowsAffected === 0) {
      throw new CustomError('Message not deleted', 500);
    }
    return res.json({
      status: 200,
      data: 'Message deleted',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { deleteMessage };
