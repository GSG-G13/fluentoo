const { Op } = require('sequelize');
const { Message } = require('../../models');

const readMessage = async (req, res, next) => {
  const { id: sender } = req.user;
  const { receiver } = req.params;

  try {
    const messages = await Message.findAndCountAll({
      where: {
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
      order: [['createdAt', 'ASC']],
    });
    return res.json({
      status: 200,
      data: messages.rows,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { readMessage };
