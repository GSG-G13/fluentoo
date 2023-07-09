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

FeedBack.belongsTo(User, {
  foreignKey: 'commentingId',
});
FeedBack.belongsTo(User, {
  foreignKey: 'commenterId',
});
User.hasMany(FeedBack, { foreignKey: 'commenter_id' });

module.exports = FeedBack;
