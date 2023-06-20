const { Message } = require('../../models');

const createMessage = async (req, res, next) => {
  const { sender, receiver, content } = req.body;
  try {
    const message = await Message.create({
      sender,
      receiver,
      content,
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
