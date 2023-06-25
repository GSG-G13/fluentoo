const { Sequelize } = require('sequelize');
const {
  databaseConfig: {
    database,
    username,
    password,
    hostname,
    dialect,
    charset,
    logging,
    timestamps,
    underscored,
  },
} = require('../config');

// eslint-disable-next-line no-console
console.log({
  database, username, password, hostname, dialect,
});
const sequelize = new Sequelize(database, username, password, {
  hostname,
  dialect,
  logging,
  ssl: true,
  dialectOptions: {
    charset,
  },
  define: {
    timestamps,
    underscored,
  },
});

module.exports = sequelize;
