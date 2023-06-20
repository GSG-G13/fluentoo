const { Message } = require('../../models');

const updateMessage = async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const message = await Message.update(
      { content },
      {
        where: {
          id,
        },
      },
    );
    return res.json({
      status: 200,
      data: message,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { updateMessage };
