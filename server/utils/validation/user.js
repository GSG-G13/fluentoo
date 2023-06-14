const Joi = require('joi');

const signupValidation = Joi.object({
  username: Joi.string().required().messages({
    'any.required': 'Username is required.',
  }),
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required.',
    'string.email': 'Invalid email format.',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required.',
    'string.min': 'Password must be at least 8 characters long.',
  }),
});

const loginValidation = Joi.object({
  email: Joi.string().required().messages({
    'any.required': 'Username is required.',
  }),
  password: Joi.string().min(8).required().messages({
    'any.required': 'Password is required.',
    'string.min': 'Password must be at least 8 characters long.',
  }),
});

module.exports = { signupValidation, loginValidation };
