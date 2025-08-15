import Movie from "../../../Models/theaterAddMovie.js";


export const createMovie = async (req, res) => {
    try {
        const { movieName, genre, releaseYear, rating, description, language, duration } = req.body;

        const imageFile = req.file;

        if (
            !imageFile ||
            !movieName ||
            !genre ||
            !releaseYear ||
            !description ||
            !language ||
            !duration
        ) {
            return res.status(400).json({ message: "All required fields must be filled." });
        }

        const image = imageFile.filename;

        // Create new movie
        const newMovie = new Movie({
            image,
            movieName,
            genre,
            releaseYear,
            rating, // optional — has a default
            description,
            language,
            duration
        });

        await newMovie.save();
        res.status(201).json({
            message: "Movie created successfully",
            movie: newMovie
        });

    }

    catch (error) {
        console.error("Error creating movie:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}


export const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.id;

        const { movieName, genre, releaseYear, rating, description, language, duration } = req.body;

        const updates = {};

        if (movieName) updates.movieName = movieName;
        if (genre) updates.genre = genre;
        if (releaseYear) updates.releaseYear = releaseYear;
        if (rating) updates.rating = rating;
        if (description) updates.description = description;
        if (language) updates.language = language;
        if (duration) updates.duration = duration;
        if (req.file) {
            updates.image = req.file.path;
        }

        const updatedMovie = await Movie.findByIdAndUpdate(movieId, { $set: updates }, { new: true })

        if (!updatedMovie) {
            return res.status(404)
                .json({ message: `Movie not found` })
        }

        res.status(200)
            .json({ message: `movie ${movieName} updated successfully` })

    }
    catch (err) {
        console.log(err)
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const deletedMovie = await Movie.findByIdAndDelete(movieId);

        if(!deletedMovie){
            return res.status(400)
            .json({message:"Movie not found"})
        }

        res.status(200)
        .json({message:`Movie ${movieId} deleted successfully`,deletedMovie})

    }
  catch (err) {
        console.error("Error deleting movie:", err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }
}

export const getALLMovies = async(req,res)=>{
    try{
        const movies = await Movie.find();
        res.status(200).json({
            message:"Movies fetched successfully",
            count: movies.length,movies
        })
    }
    catch(err){
        console.log(err)
    }
}

export const searchMovies = async(req,res)=>{
    try{
        const{name, genre}=req.body;
        const query={};

        if(name){
            query.movieName = {$regex: name, $options: 'i'}
        }
         if (genre) {
            query.genre = { $regex: genre, $options: 'i' };
        }

         const movies = await Movie.find(query);

          res.status(200).json({
            message: "Search results",
            count: movies.length,
            movies
        });
    }
    catch(error){
       console.error("Error searching movies:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}


