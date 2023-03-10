import { RequestHandler } from 'express';
import ErrorService, { ServerSetupError, ForbiddenError } from '../../../services/error-service';
import MoviesModel from '../model';
import { MovieViewModel, PartialMovieDataValidation } from '../types';
import partialMovieDataValidationSchema from '../validation-schemas/movie-data-partial-validation-schema';
import UserModel from '../auth/model/index';

export const updateMovie: RequestHandler<
{ id: string | undefined },
MovieViewModel | ResponseError,
PartialMovieDataValidation,
{}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    if (req.authData === undefined) throw new ServerSetupError();
    const partialMovieData = partialMovieDataValidationSchema.validateSync(
      req.body,
      { abortEarly: false },
    );
    const user = await UserModel.getUserByEmail(req.authData.email);
    const movie = await MoviesModel.getMovie(id);
    if (user.role !== 'ADMIN' && user.id !== movie.owner.id) throw new ForbiddenError();

    const updatedMovie = await MoviesModel.updateMovie(id, partialMovieData);
    res.status(200).json(updatedMovie);
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
