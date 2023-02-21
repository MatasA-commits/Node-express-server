import { RequestHandler } from 'express';
import moviesData from './movies-data';
import MovieModel from './movie-model';

const isMovieData = (
  potentialMovieData: PartialMovieData | MovieData,
): potentialMovieData is MovieData => {
  const {
    title, year, rating, images, mainCharacter,
  } = potentialMovieData;
  if (typeof title !== 'string') return false;
  if (typeof year !== 'string') return false;
  if (typeof rating !== 'number') return false;
  if (!Array.isArray(images)) return false;
  if (images.some((img) => typeof img !== 'string')) return false;
  if (mainCharacter === null || typeof mainCharacter !== 'object') return false;
  if (typeof mainCharacter.actor !== 'string') return false;
  if (typeof mainCharacter.role !== 'string') return false;

  return true;
};

type MovieData = Omit<MovieModel, 'id'>;
type PartialMovieData = PartialRecursive<MovieData>;

export const createMovie: RequestHandler<
{},
MovieModel | ResponseError,
PartialMovieData,
{}
> = (req, res) => {
  const movieData = req.body;
  if (!isMovieData(movieData)) {
    res.status(400).json({ error: 'Incorrect data' });
    return;
  }
  const newMovie: MovieModel = { id: '5', ...movieData };
  moviesData.push(newMovie);
  res.status(201).json(newMovie);
};
