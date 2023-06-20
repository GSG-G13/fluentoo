const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');

const User = require('./user');

const Profile = sequelize.define('profiles', {
  gender: {
    type: DataTypes.ENUM,
    values: ['female', 'male'],
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
}, {
  underscored: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

User.hasOne(Profile);
Profile.belongsTo(User);
module.exports = Profile;
