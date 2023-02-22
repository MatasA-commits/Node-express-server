import { RequestHandler } from 'express';
import { MovieModel } from '../types';
import moviesData from '../movies-data';

export const getMovie: RequestHandler<
{ id: string | undefined }, // Parametrai
MovieModel | ResponseError, // Atsakymo tipas
{}, // Body - gaunami duomenys
{} // QueryParams - duomenys siunciant GET uzklausas, pvz: ?min=1&max=18
> = (req, res) => {
  const { id } = req.params;

  if (id === undefined) {
    res.status(400).json({ error: 'server setup error' });
    return;
  }

  const foundMovie = moviesData.find((movie) => movie.id === id);

  if (foundMovie === undefined) {
    res.status(400).json({ error: `movie with id: ${id} was not found` });
    return;
  }

  res.status(200).json(foundMovie);
};
