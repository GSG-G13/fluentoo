const { DataTypes } = require('sequelize');
const sequelize = require('../database/config/connection');
const User = require('./user');

const FeedBack = sequelize.define('feedbacks', {
  comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  star: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.hasMany(FeedBack, { foreignKey: 'commenter_id' });
FeedBack.belongsTo(User, { foreignKey: 'commenter_id' });
FeedBack.belongsTo(User, { foreignKey: 'commenting_id' });
module.exports = FeedBack;
