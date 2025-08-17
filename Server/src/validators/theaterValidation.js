import Joi from 'joi';

export const theaterRegisterValidation = Joi.object({
    image: Joi.string()
        .required()
        .messages({
            'any.required': 'Theater image is required',
            'string.base': 'Image must be a string',
        }),

    theaterName: Joi.string()
        .min(2)
        .max(100)
        .required()
        .trim()
        .messages({
            'string.base': 'Theater name must be a string',
            'string.min': 'Theater name must be at least 2 characters',
            'string.max': 'Theater name must be at most 100 characters',
            'any.required': 'Theater name is required',
        }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            'string.email': 'Please provide a valid email',
            'any.required': 'Email is required',
        }),

    password: Joi.string()
        .min(6)
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters',
            'any.required': 'Password is required',
        }),

    address: Joi.string()
        .min(5)
        .required()
        .trim()
        .messages({
            'string.min': 'Address must be at least 5 characters long',
            'any.required': 'Address is required',
        }),

    location: Joi.string()
        .min(2)
        .required()
        .trim()
        .messages({
            'any.required': 'Location is required',
            'string.base': 'Location must be a string',
        }),

    contact: Joi.string()
        .pattern(/^[0-9]{10}$/)
        .required()
        .messages({
            'string.pattern.base': 'Contact must be a valid 10-digit number',
            'any.required': 'Contact number is required',
        }),

    openingHours: Joi.object({
        start: Joi.string()
            .pattern(/^([1-9]|1[0-2]):[0-5][0-9](AM|PM)$/i)
            .required()
            .messages({
                'string.pattern.base': 'Start time must be in format HH:MMAM/PM (e.g., 10:00AM)',
                'any.required': 'Opening start time is required',
            }),

        end: Joi.string()
            .pattern(/^([1-9]|1[0-2]):[0-5][0-9](AM|PM)$/i)
            .required()
            .messages({
                'string.pattern.base': 'End time must be in format HH:MMAM/PM (e.g., 10:00PM)',
                'any.required': 'Opening end time is required',
            }),
    }).required()
      .messages({
        'any.required': 'Opening hours must be provided',
    }),

    numberOfscreens: Joi.number()
        .integer()
        .min(1)
        .required()
        .messages({
            'number.base': 'Number of screens must be a number',
            'number.integer': 'Number of screens must be an integer',
            'number.min': 'There must be at least one screen',
            'any.required': 'Number of screens is required',
        }),

    role: Joi.string()
        .valid('user', 'theater', 'admin')
        .default('theater')
        .messages({
            'any.only': 'Role must be either user, theater, or admin',
        }),
});
