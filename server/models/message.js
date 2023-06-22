const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');

const User = require('./user');

const Message = sequelize.define('messages', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Message.belongsTo(User, {
  foreignKey: 'sender',
});
Message.belongsTo(User, {
  foreignKey: 'receiver',
});

module.exports = Message;
