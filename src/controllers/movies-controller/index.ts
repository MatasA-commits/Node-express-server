import express, { RequestHandler } from 'express';
import { createMovie } from './mutations/create-movie';
import { getMovie } from './queries/get-movie';
import { getMovies } from './queries/get-movies';
import { deleteMovie } from './mutations/delete-movie';
import { updateMovie } from './mutations/update-movie';
import authMiddleware from './middlewares/auth-middlewares';

const moviesRouter = express.Router();

moviesRouter.get('/', getMovies);
moviesRouter.get('/:id', getMovie);

moviesRouter.post('/', authMiddleware, createMovie);
moviesRouter.delete('/:id', authMiddleware, deleteMovie as RequestHandler);
moviesRouter.patch('/:id', authMiddleware, updateMovie as RequestHandler);

export default moviesRouter;
