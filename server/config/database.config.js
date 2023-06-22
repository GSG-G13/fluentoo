require('dotenv').config();

const env = process.argv[2] || process.env.NODE_ENV || 'development';

const development = {
  hostname: process.env.DEV_DB_HOSTNAME || 'localhost',
  database: process.env.DEV_DB_NAME || 'fluento',
  username: process.env.DEV_DB_USERNAME || 'team3',
  password: process.env.DEV_DB_PASSWORD || '123',
  port: process.env.DEV_DB_PORT || 5432,
  dialect: 'postgres',
  charset: 'utf8',
  logging: true,
  timestamps: true,
  underscored: true,
};

const test = {
  hostname: process.env.TEST_DB_HOSTNAME || 'localhost',
  database: process.env.DB_NAME || 'fluento',
  username: process.env.DB_USERNAME || 'team3',
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || '123',
  dialect: 'postgres',
  charset: 'utf8',
  logging: true,
  timestamps: true,
  underscored: true,
};

const production = {
  hostname: process.env.DB_HOSTNAME || 'localhost',
  database: process.env.DB_NAME || 'fluento',
  username: process.env.DB_USERNAME || 'team3',
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || '123',
  dialect: 'postgres',
  charset: 'utf8',
  logging: false,
  timestamps: true,
  underscored: true,
};

const config = { development, test, production };

module.exports = config[env];
