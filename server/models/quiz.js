const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Quiz = sequelize.define('quizzes', {
  language: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Quiz;
