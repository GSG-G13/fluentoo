const Joi = require('joi');

const addFeedBackSchema = Joi.object({
  comment: Joi.string(),
  star: Joi.number().min(0).max(5),
});

module.exports = addFeedBackSchema;
