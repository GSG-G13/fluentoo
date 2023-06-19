const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');
const User = require('./user');

const Chat = sequelize.define('chats', {
  user1_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  user2_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
});

User.hasMany(Chat);
Chat.belongsTo(User);

module.exports = Chat;
