import { RequestHandler } from 'express';
import { ValidationError } from 'yup';
import MovieService from '../../../services/movies-service';
import { MovieModel, MovieData } from '../types';
import movieDataValidationSchema from '../validation-schemas/movie-data-validation-schema';

export const createMovie: RequestHandler<
{},
MovieModel | ResponseError,
MovieData,
{}
> = async (req, res) => {
  try {
    const houseData: MovieData = movieDataValidationSchema
      .validateSync(req.body, { abortEarly: false });

    const createdHouse = await MovieService.createMovie(houseData);

    res.status(201).json(createdHouse);
  } catch (err) {
    if (err instanceof ValidationError) {
      const manyErrors = err.errors.length > 1;
      res.status(400).json({
        error: manyErrors ? 'Validation errors' : err.errors[0],
        errors: manyErrors ? err.errors : undefined,
      });
    } else if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'Request error' });
    }
  }
};
