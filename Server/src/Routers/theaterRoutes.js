import {Router} from 'express';
import { createMovie, deleteMovie, getALLMovies, updateMovie } from '../Controllers/theaterController/Movie/theaterMovieController.js';
import { upload } from '../middlewares/upload.js';
export const theaterRouter = Router();



//CRUDMovie
theaterRouter.post("/theater/addmovie",upload.single('image'),createMovie)
theaterRouter.put("/theater/updatemovie/:id",upload.single('image'),updateMovie)
theaterRouter.delete("/theater/deletemovie/:id",upload.none(),deleteMovie)
theaterRouter.get("/theater/getallmovies",getALLMovies)