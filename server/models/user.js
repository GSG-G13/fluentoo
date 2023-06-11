const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');

const User = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  passwoed: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});
module.exports = User;
