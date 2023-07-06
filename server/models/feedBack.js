const { DataTypes } = require('sequelize');
const sequelize = require('../database/connection');
const User = require('./user');

const FeedBack = sequelize.define(
  'feedBacks',
  {
    comment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'feedBacks',
  },
);

User.hasMany(FeedBack, { foreignKey: 'commenter_id' });
FeedBack.belongsTo(User, { foreignKey: 'commenter_id' });
FeedBack.belongsTo(User, { foreignKey: 'commenting_id' });
module.exports = FeedBack;
