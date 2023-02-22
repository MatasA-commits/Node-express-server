import { RequestHandler } from 'express';
import * as yup from 'yup';

import createId from 'uniqid';
import moviesData from '../movies-data';
import { MovieModel } from '../types';
import movieDataValidationSchema from '../validation-schemas/movie-data-validation-schema';

type MovieData = Omit<MovieModel, 'id'>;
type PartialMovieData = PartialRecursive<MovieData>;

export const createMovie: RequestHandler<
{},
MovieModel | ResponseError,
PartialMovieData,
{}
> = (req, res) => {
  try {
    const movieData = movieDataValidationSchema.validateSync(req.body, { abortEarly: false });
    const newMovie: MovieModel = { id: createId(), ...movieData };
    moviesData.push(newMovie);

    res.status(201).json(newMovie);
  } catch (err) {
    if (err instanceof yup.ValidationError) {
      const manyErrors = err.errors.length > 1;
      res.status(400).json({
        error: manyErrors ? 'Validation errors' : err.errors[0],
        errors: manyErrors ? err.errors : undefined,
      });
    } else if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'invalid data' });
    }
  }
};
