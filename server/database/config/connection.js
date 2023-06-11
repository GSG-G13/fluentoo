const { Sequelize } = require('sequelize');
require('dotenv').config();

const { NODE_ENV } = process.env;

const url = NODE_ENV === 'development' ? process.env.DB_URL : process.env.DB_URL_production;

const sequelize = new Sequelize(url, {
  logging: true,
  dialectOptions: {
    charset: 'utf8',
  },
  ssl: {
    require: true,
    rejectUnauthorized: NODE_ENV !== 'development',
  },
});

sequelize.sync();

module.exports = sequelize;
