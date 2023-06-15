const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');

const User = require('./user');

const Profile = sequelize.define('profiles', {
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  practice_languages: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    allowNull: false,
  },
  spoken_languages: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
    allowNull: false,
  },
  intrests: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  bio: {
    type: DataTypes.TEXT,
  },
  avatar: {
    type: DataTypes.TEXT,
  },
});

User.hasOne(Profile, { foreignKey: 'userId' });
Profile.belongsTo(User, { foreignKey: 'userId' });
module.exports = Profile;
