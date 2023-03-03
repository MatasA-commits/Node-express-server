import { RequestHandler } from 'express';
import ErrorService, { ServerSetupError } from '../../../services/error-service';
import MoviesModel from '../model';
import { MovieModel } from '../types';

export const deleteMovie: RequestHandler<
{ id: string | undefined },
MovieModel | ResponseError,
{},
{}
> = async (req, res) => {
  const { id } = req.params;

  try {
    if (id === undefined) throw new ServerSetupError();
    const movie = await MoviesModel.getMovie(id);
    await MoviesModel.deleteMovie(id);

    res.status(200).json(movie);
  } catch (err) {
    const [status, errorResponse] = ErrorService.handleError(err);
    res.status(status).json(errorResponse);
  }
};
