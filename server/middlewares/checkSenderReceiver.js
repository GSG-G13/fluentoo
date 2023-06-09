const { CustomError } = require('../utils');
const { User } = require('../models');

const checkSenderReceiver = async (req, res, next) => {
  const { sender, receiver } = req.body;
  try {
    if (sender && receiver && sender === receiver) {
      throw new CustomError('sender and receiver cannot be the same', 400);
    }
    const senderExists = await User.findOne({
      where: {
        id: sender,
      },
    });
    const receiverExists = await User.findOne({
      where: {
        id: receiver,
      },
    });
    if (!senderExists || !receiverExists) {
      throw new CustomError('user not found', 404);
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { checkSenderReceiver };
