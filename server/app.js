/* eslint-disable no-console */
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const sequelize = require('./database/connection');
const router = require('./routes');
const { clientError, serverError } = require('./controllers/errors');
const { appConfig } = require('./config');

const app = express();

if (appConfig.debug) app.use(morgan('combined'));
app.set('port', appConfig.port || 5000);
app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/v1', router);
sequelize.authenticate().then(() => {
  // eslint-disable-next-line no-console
  console.log('db connected');
// eslint-disable-next-line no-console
}).catch((err) => console.log(err));

app.use(clientError);
app.use(serverError);

module.exports = app;
