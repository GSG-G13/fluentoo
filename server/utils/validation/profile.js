const Joi = require('joi');

const profileValidation = Joi.object({
  gender: Joi.string(),
  country: Joi.string(),
  birthdate: Joi.date(),
  intrests: Joi.array(),
  bio: Joi.string(),
  avatar: Joi.string(),
  practiceLanguages: Joi.array(),
  spokenLanguages: Joi.array(),
});
module.exports = profileValidation;
