const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./user');

const Profile = sequelize.define(
  'profiles',
  {
    gender: {
      type: DataTypes.ENUM,
      values: ['female', 'male'],
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    practiceLanguages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: false,

    },
    spokenLanguages: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      allowNull: false,

    },
    interests: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
    },
    bio: {
      type: DataTypes.TEXT,
    },
    avatar: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: 'profiles',
  },
);

User.hasOne(Profile);
Profile.belongsTo(User);
User.hasOne(Profile);
module.exports = Profile;
