/* eslint-disable consistent-return */
const { ValidationError } = require('joi');
const { JsonWebTokenError } = require('jsonwebtoken');
const { CustomError } = require('../../utils');

// eslint-disable-next-line no-unused-vars
const serverError = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err);
  if (err instanceof ValidationError) {
    return res.json({
      msg: err.details[0].message,
      status: 400,
    });
  }
  if (err instanceof JsonWebTokenError) {
    return res.json({
      msg: 'Unauthorized',
      status: 401,
    });
  }

  if (err instanceof CustomError) {
    return res.json({
      msg: err.message,
      status: err.status,
    });
  }
  res.json({
    msg: 'Internal Server Error',
    status: 500,
  });
};

module.exports = serverError;
