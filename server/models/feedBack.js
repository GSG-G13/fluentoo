const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');

const FeedBack = sequelize.define('feedbacks', {
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  star: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = FeedBack;
