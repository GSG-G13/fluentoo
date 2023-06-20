const { Message } = require('../../models');
const { CustomeError } = require('../../utils');

const updateMessage = async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const data = await Message.findByPk(id);
    if (!data) {
      throw new CustomeError('Message not found', 404);
    }
    const message = await Message.update(
      { content },
      {
        where: {
          id,
        },
        returning: true,
      },
    );
    if (!message) {
      throw new CustomeError('updating faild');
    }
    return res.json({
      msg: 'Message updated successfully',
      status: 200,
      data: message[1],
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { updateMessage };
