import { RequestHandler } from 'express';
import ErrorService, { ServerSetupError } from '../../../services/error-service';
import MoviesModel from '../model';
import { MovieViewModel, MovieData, MovieBody } from '../types';
import movieDataValidationSchema from '../validation-schemas/movie-data-validation-schema';
import UserModel from '../auth/model/index';

export const createMovie: RequestHandler<
{},
MovieViewModel | ResponseError,
MovieData,
{}
> = async (req, res) => {
  try {
    const movieData: MovieBody = movieDataValidationSchema
      .validateSync(req.body, { abortEarly: false });

    if (req.authData === undefined) throw new ServerSetupError();
    const user = await UserModel.getUserByEmail(req.authData.email);
    const createdHouse = await MoviesModel.createMovie({ ...movieData, ownerId: user.id });

    res.status(201).json(createdHouse);
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
