const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Quiz = require('./quiz');

const Question = sequelize.define('questions', {
  questionText: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  options: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    allowNull: false,
  },
  correctOption: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Quiz.hasMany(Question);
Question.belongsTo(Quiz);

module.exports = Question;
