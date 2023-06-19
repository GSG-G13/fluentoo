const { Chat } = require('../../models');

const getAllChats = async (req, res, next) => {
  try {
    const chats = await Chat.findAll();
    return res.json({
      status: 200,
      data: chats,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { getAllChats };
