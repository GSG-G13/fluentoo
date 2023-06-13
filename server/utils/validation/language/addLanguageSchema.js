const Joi = require('joi');

const addLangSchema = Joi.object({
  name: Joi.string().required()
    .messages({
      'string.empty': 'Language name is required !',
      'any.required': 'Language name is required',
    }),
  shortcut: Joi.string().required()
    .messages({
      'string.empty': 'Language shortcut is required !',
      'any.required': 'Language shortcut is required',
    }),
  flag: Joi.string().required()
    .messages({
      'string.empty': 'flag url is required !',
      'any.required': 'flag url is required',
    }),
});

module.exports = addLangSchema;
