const { Sequelize } = require('sequelize');
const {
  databaseConfig: {
    database, username, password, host, dialect, charset, logging, timestamps, underscored,
  },
} = require('../config');

const sequelize = new Sequelize(
  database,
  username,
  password,
  {
    host,
    dialect,
    logging,
    dialectOptions: {
      charset,
    },
    define: {
      timestamps,
      underscored,
    },
  },
);

module.exports = sequelize;
