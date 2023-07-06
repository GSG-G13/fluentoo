const { Op } = require('sequelize');
const { Message, User } = require('../../models');
const { makeArrayOfObjectsUnique } = require('../../utils');

const findAllContacts = async (req, res, next) => {
  const { id } = req.params;

  try {
    const messages = await Message.findAll({
      where: {
        [Op.or]: [{ sender: id }, { receiver: id }],
      },
      include: [
        {
          model: User,
          attributes: ['username', 'id'],
          as: 'senderM',
        },
        {
          model: User,
          attributes: ['username', 'id'],
          as: 'receiverM',
        },
      ],
    });

    const contacts = messages.map((message) => {
      if (+message.senderM.id === +id) {
        return { userId: message.receiverM.id, userName: message.receiverM.username };
      }
      return { userId: message.senderM.id, userName: message.senderM.username };
    });

    const uniqueContacts = makeArrayOfObjectsUnique(contacts, 'userId');

    return res.json({
      msg: 'Contacts Returned Successfully',
      status: 200,
      data: uniqueContacts,
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = { findAllContacts };
