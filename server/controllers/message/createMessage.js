const { Message } = require('../../models');
const { CustomError } = require('../../utils');

const createMessage = async (req, res, next) => {
  const { sender, receiver, content } = req.body;
  try {
    if (sender === receiver) throw new CustomError('You can\'t send message to yourself', 400);
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
