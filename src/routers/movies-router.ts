import express from 'express';
import {
  getMovies, createMovie, getMovie, updateMovie, deleteMovie,
} from '../controllers/movies-controller';

const moviesRouter = express.Router();

moviesRouter.get('/', getMovies);
moviesRouter.get('/:id', getMovie);
moviesRouter.post('/', createMovie);
moviesRouter.delete('/:id', deleteMovie);
moviesRouter.patch('/:id', updateMovie);

export default moviesRouter;
