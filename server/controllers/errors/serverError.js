/* eslint-disable consistent-return */
const { ValidationError } = require('joi');
const { JsonWebTokenError } = require('jsonwebtoken');
const { CustomError } = require('../../utils');

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  if (err instanceof ValidationError) {
    return res.status(400).json({
      msg: err.details[0].message,
      status: 400,
    });
  }
  if (err instanceof JsonWebTokenError) {
    return res.status(401).json({
      msg: 'Unauthorized',
      status: 401,
    });
  }

  if (err instanceof CustomError) {
    return res.status(err.status).json({
      msg: err.message,
      status: err.status,
    });
  }
  res.status(500).json({
    msg: 'Internal Server Error',
    status: 500,
  });
};

module.exports = serverError;
