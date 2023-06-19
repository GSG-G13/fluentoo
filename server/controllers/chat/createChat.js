const { Chat } = require('../../models');

const createChat = async (req, res, next) => {
  try {
    const { chatId } = req.params;
    // chatId is an object contain two userIds
    // validate chatIds to make sure it is an object from database and not null
    const newChat = await Chat.create(chatId);
    return res.json({
      msg: 'chat created successfully',
      status: 201,
      data: newChat,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { createChat };
