const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const app = express();


app.set('port', process.env.PORT || 5000);

app.disable('x-powered-by');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
