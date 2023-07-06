const Joi = require('joi');

const profileIdValidation = Joi.object({

  userId: Joi.number(),
});
module.exports = profileIdValidation;
