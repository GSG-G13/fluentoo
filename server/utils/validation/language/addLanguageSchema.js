const Joi = require('joi');

const addLangSchema = Joi.object({
  name: Joi.string().required()
    .messages({
      'string.empty': 'Language name is required !',
      'any.required': 'Language name is required',
    }),
});

module.exports = addLangSchema;
