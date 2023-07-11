const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const Language = sequelize.define(
  'Language',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'languages',
  },
);

module.exports = Language;
