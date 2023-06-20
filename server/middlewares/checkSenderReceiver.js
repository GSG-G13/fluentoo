const CustomeError = require('../utils/helper/customeError');
const { User } = require('../models');

const checkSenderReceiver = async (req, res, next) => {
  const { sender, receiver } = req.body;
  try {
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
      throw new CustomeError('user not found', 404);
    }
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = { checkSenderReceiver };
