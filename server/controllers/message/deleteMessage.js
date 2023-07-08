const { Message } = require('../../models');
const { CustomError } = require('../../utils');

const deleteMessage = async (req, res, next) => {
  const { id } = req.params;
  try {
    const message = await Message.findByPk(id);
    if (!message) {
      throw new CustomError('Message not found', 404);
    }
    await message.destroy();

    return res.json({
      status: 200,
      data: 'Message deleted',
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { deleteMessage };
