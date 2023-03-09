import { RequestHandler } from 'express';
import ErrorService, { ServerSetupError, ForbiddenError } from '../../../services/error-service';
import MoviesModel from '../model';
import { MovieViewModel } from '../types';
import UserModel from '../auth/model/index';

export const deleteMovie: RequestHandler<
{ id: string | undefined },
MovieViewModel | ResponseError,
{},
{}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    if (req.authData === undefined) throw new ServerSetupError();
    const user = await UserModel.getUserByEmail(req.authData.email);
    const movie = await MoviesModel.getMovie(id);

    if (user.role !== 'ADMIN' && user.id !== movie.owner.id) throw new ForbiddenError();

    await MoviesModel.deleteMovie(id);

    res.status(200).json(movie);
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
