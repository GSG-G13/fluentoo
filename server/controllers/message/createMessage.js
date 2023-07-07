const { Op } = require('sequelize');
const { Message } = require('../../models');
const { CustomError } = require('../../utils');

const createMessage = async (req, res, next) => {
  const { sender, receiver, content } = req.body;

  try {
    if (content === '') {
      const emptyMessage = await Message.findOne({
        where: {
          content: '',
          [Op.or]: [
            {
              sender,
              receiver,
            },
            {
              sender: receiver,
              receiver: sender,
            },
          ],
        },
      });

      if (emptyMessage) {
        throw new CustomError('Can not send empty message', 404);
      }
    }

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
