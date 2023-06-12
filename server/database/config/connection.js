const { Sequelize } = require('sequelize');
require('dotenv').config();

const url = process.env.DB_URL;

console.log(url, 'from connection');
const sequelize = new Sequelize(url, {
  logging: true,
  dialectOptions: {
    charset: 'utf8',
  },
});
sequelize.sync();

module.exports = sequelize;
