const { Chat } = require('../../models');

const getChat = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    const chat = await Chat.findByPk(chatId);
    return res.json({
      status: 200,
      data: chat,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getChat };
