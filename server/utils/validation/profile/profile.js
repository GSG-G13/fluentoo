const Joi = require('joi');

const profileValidation = Joi.object({
  userId: Joi.number(),
  gender: Joi.string().valid('female', 'male').required(),
  country: Joi.string().required(),
  birthDate: Joi.date().required(),
  interests: Joi.array(),
  bio: Joi.string(),
  avatar: Joi.string(),
  practiceLanguages: Joi.array().required(),
  spokenLanguages: Joi.array().required(),
  profileId: Joi.number(),
});
module.exports = profileValidation;
