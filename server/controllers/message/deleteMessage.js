const { Message } = require('../../models');

const deleteMessage = async (req, res, next) => {
  const { id } = req.params;
  try {
    const message = await Message.destroy({
      where: {
        id,
      },
    });
    return res.json({
      status: 200,
      data: message,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { deleteMessage };
