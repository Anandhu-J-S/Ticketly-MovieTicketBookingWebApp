import mongoose from "mongoose";

const addMovieSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        movieName: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        releaseYear: {
            type: Number,
            required: true
        },
        rating: {
            type: Number,
            min: 0,
            max: 10,
            default: 0
        },
        description: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        duration: {
            type: String, // e.g. "2h 15m"
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model("Movie", addMovieSchema);

export default Movie;
