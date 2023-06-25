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

console.log({
  database, username, password, hostname, dialect,
});
const sequelize = new Sequelize(database, username, password, {
  hostname,
  dialect,
  logging,
  dialectOptions: {
    charset,
  },
  define: {
    timestamps,
    underscored,
  },
});

module.exports = sequelize;
