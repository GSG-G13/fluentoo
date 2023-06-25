const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./user');

const FeedBack = sequelize.define('feedbacks', {
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  star: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

FeedBack.belongsTo(User, {
  foreignKey: 'commenterId',
});
FeedBack.belongsTo(User, {
  foreignKey: 'commentingId',
});
module.exports = FeedBack;
