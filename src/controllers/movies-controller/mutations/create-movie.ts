import { RequestHandler } from 'express';
import ErrorService from '../../../services/error-service';
import MoviesModel from '../model';
import { MovieModel, MovieData } from '../types';
import movieDataValidationSchema from '../validation-schemas/movie-data-validation-schema';

export const createMovie: RequestHandler<
{},
MovieModel | ResponseError,
MovieData,
{}
> = async (req, res) => {
  try {
    const movieData: MovieData = movieDataValidationSchema
      .validateSync(req.body, { abortEarly: false });

    const createdHouse = await MoviesModel.createMovie(movieData);

    res.status(201).json(createdHouse);
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
