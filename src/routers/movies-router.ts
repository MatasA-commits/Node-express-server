import express from 'express';
import { getMovies, createMovie } from '../controllers/movies-controller';

const moviesRouter = express.Router();

moviesRouter.get('/', getMovies);
moviesRouter.post('/', createMovie);

export default moviesRouter;
