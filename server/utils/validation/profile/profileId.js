const Joi = require('joi');

const profileIdValidation = Joi.object({

  profileId: Joi.number(),
});
module.exports = profileIdValidation;
