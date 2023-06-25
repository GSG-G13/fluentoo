const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Language = sequelize.define('languages', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shortcut: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flag: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Language;
