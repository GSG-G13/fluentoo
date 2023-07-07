const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = require('./user');

const Message = sequelize.define(
  'Message',
  {
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'messages',
  },
);

Message.belongsTo(User, {
  foreignKey: 'sender',
  as: 'senderM',
});
Message.belongsTo(User, {
  foreignKey: 'receiver',
  as: 'receiverM',
});

module.exports = Message;
