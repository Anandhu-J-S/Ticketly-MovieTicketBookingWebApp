import mongoose from "mongoose";

const addMovieSchema = new mongoose.Schema(
    {
        image: {
            type: String,
        
        },
        movieName: {
            type: String,
            
        },
        genre: {
            type: String,
         
        },
        releaseYear: {
            type: Number,
      
        },
        rating: {
            type: Number
        },
        description: {
            type: String,
            
        },
        language: {
            type: String,
        
        },
        duration: {
            type: String, // e.g. "2h 15m"
            
        }
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model("Movie", addMovieSchema);

export default Movie;
