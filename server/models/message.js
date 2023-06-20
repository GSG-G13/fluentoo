const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');

const User = require('./user');

const Message = sequelize.define('messages', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

User.belongsTo(Message, {
  foreignKey: 'sender',
});
User.belongsTo(Message, {
  foreignKey: 'receiver',
});

module.exports = Message;
