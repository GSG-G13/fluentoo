const Joi = require('joi');

const addFeedBackSchema = Joi.object({
  comment: Joi.string().allow('').optional(),
  star: Joi.number().min(1).max(5).required()
    .messages({
      'number.empty': 'star is required !',
      'any.required': 'star is required',
    }),
});

module.exports = addFeedBackSchema;
