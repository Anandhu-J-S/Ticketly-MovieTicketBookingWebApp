import Joi from 'joi';

export const userRegistrationValidation = Joi.object({
    profilePic: Joi.string()
        .required()
        .messages({
            'any.required': 'Profile picture is required',
            'string.base': 'Profile picture must be a string',
        }),

    username: Joi.string()
        .min(4)
        .max(30)
        .required()
        .trim()
        .messages({
            'string.base': 'Username must be a string',
            'string.min': 'Username must be at least 4 characters',
            'string.max': 'Username must be at most 30 characters',
            'any.required': 'Username is required',
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Please provide a valid email',
            'any.required': 'Email is required',
        }),

    contact: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            'string.pattern.base': 'Contact number must be a valid 10-digit number',
            'any.required': 'Contact number is required',
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters',
            'any.required': 'Password is required',
        }),

    role: Joi.string()
        .valid('admin', 'user', 'theater')
        .required()
        .messages({
            'any.only': 'Role must be either admin, user, or theater',
            'any.required': 'Role is required',
        }),
});

export const userLoginValidation = Joi.object({
    username: Joi.string()
        .required()
        .trim()
        .messages({
            'any.required': 'Username is required',
            'string.base': 'Username must be a string',
        }),

    password: Joi.string()
        .required()
        .messages({
            'any.required': 'Password is required',
        }),
});
