const Joi = require('joi');

const profileValidation = Joi.object({
  userId: Joi.number(),
  gender: Joi.string().valid('female', 'male').required(),
  country: Joi.string(),
  birthdate: Joi.date(),
  intrests: Joi.array(),
  bio: Joi.string(),
  avatar: Joi.string(),
  practiceLanguages: Joi.array(),
  spokenLanguages: Joi.array(),
});
module.exports = profileValidation;
