const { Message } = require("../../models");
const { CustomError } = require("../../utils");

const updateMessage = async (req, res, next) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const data = await Message.findByPk(id);
    if (!data) {
      throw new CustomError("Message not found", 404);
    }
    const message = await Message.update(
      { content },
      {
        where: {
          id,
        },
        returning: true,
      }
    );
    if (!message) {
      throw new CustomError("updating failed", 500);
    }
    return res.json({
      msg: "Message updated successfully",
      status: 200,
      data: message[1],
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { updateMessage };
