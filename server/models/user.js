const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');

const User = sequelize.define(
  'users',
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    levels: {
      type: DataTypes.STRING,
      defaultValue: '[]',
      allowNull: false,
    },
  },
  {
    tableName: 'users',
  },
);

module.exports = User;
