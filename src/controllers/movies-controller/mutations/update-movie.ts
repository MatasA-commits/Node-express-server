import { RequestHandler } from 'express';
import { ValidationError } from 'yup';
import { PrivateMovieModel, PartialMovieDataValidation } from '../types';
import moviesData from '../movies-data';
import partialMovieDataValidationSchema from '../validation-schemas/movie-data-partial-validation-schema';

export const updateMovie: RequestHandler<
{ id: string | undefined }, // Parametrai
PrivateMovieModel | ResponseError, // Atsakymo tipas
PartialMovieDataValidation, // Body - gaunami duomenys
{} // QueryParams - duomenys siunciant GET uzklausas, pvz: ?min=1&max=18
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({ error: 'server setup error' });
    return;
  }

  const foundMovieIndex = moviesData.findIndex((movie) => movie.id === id);

  if (foundMovieIndex === -1) {
    res.status(400).json({ error: `movie with id: ${id} not found` });
    return;
  }

  try {
    const partialMovieData = partialMovieDataValidationSchema.validateSync(
      req.body,
      { abortEarly: false },
    );
    const foundMovie = moviesData[foundMovieIndex];

    const updatedMovie = {
      ...foundMovie,
      ...partialMovieData,
    };

    moviesData.splice(foundMovieIndex, 1, updatedMovie);

    res.status(200).json(updatedMovie);
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
