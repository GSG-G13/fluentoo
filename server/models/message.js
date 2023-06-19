const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');

const Chat = require('./chat');
const User = require('./user');

const Message = sequelize.define('messages', {
  message_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  sender_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  // receiver_id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: 'User',
  //     key: 'id',
  //   },
  // },
  // read: {
  //   type: DataTypes.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: false,
  // },
});

Chat.hasMany(Message);
Message.belongsTo(Chat);

User.hasMany(Message);
Message.belongsTo(User);

module.exports = Message;
