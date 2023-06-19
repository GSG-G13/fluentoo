const { Message } = require('../../models');

const createMessage = async (req, res, next) => {
  try {
    const { messageText, senderId, chatId } = req.body;
    const message = await Message.create({
      messageText,
      senderId,
      chatId,
    });
    return res.json({
      status: 200,
      data: message,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { createMessage };
