import Joi from 'joi';

export const movieValidation = Joi.object({
    image: Joi.string()
        .required()
        .messages({
            'any.required': 'Movie image is required',
            'string.base': 'Movie image must be a string',
        }),

    movieName: Joi.string()
        .min(1)
        .max(50)
        .required()
        .trim()
        .messages({
            'string.empty': 'Movie name cannot be empty',
            'string.min': 'Movie name must be at least 1 character',
            'string.max': 'Movie name must be less than or equal to 50 characters',
            'any.required': 'Movie name is required',
        }),

    genre: Joi.string()
        .min(2)
        .max(30)
        .required()
        .trim()
        .messages({
            'any.required': 'Genre is required',
            'string.base': 'Genre must be a string',
        }),

    releaseYear: Joi.number()
        .integer()
        .min(1888) // first film ever made
        .max(new Date().getFullYear() + 2)
        .required()
        .messages({
            'any.required': 'Release year is required',
            'number.base': 'Release year must be a number',
            'number.min': 'Release year must be later than 1888',
            'number.max': 'Release year seems too far in the future',
        }),

    rating: Joi.number()
        .min(0)
        .max(10)
        .default(0)
        .messages({
            'number.base': 'Rating must be a number',
            'number.min': 'Rating cannot be below 0',
            'number.max': 'Rating cannot be above 10',
        }),

    description: Joi.string()
        .min(10)
        .max(1000)
        .required()
        .trim()
        .messages({
            'any.required': 'Description is required',
            'string.min': 'Description must be at least 10 characters long',
            'string.max': 'Description cannot exceed 1000 characters',
        }),

    language: Joi.string()
        .min(2)
        .max(30)
        .required()
        .trim()
        .messages({
            'any.required': 'Language is required',
        }),

    duration: Joi.string()
        .pattern(/^(\d{1,2}h\s?\d{0,2}m)?$/)
        .required()
        .messages({
            'string.pattern.base': 'Duration must be in format like "2h 30m", "1h", or "45m"',
            'any.required': 'Duration is required',
        })
});
