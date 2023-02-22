import { RequestHandler } from 'express';
import { MovieModel } from './types';
import moviesData from './movies-data';

export const getMovies: RequestHandler<
{}, // Parametrai
MovieModel[], // Atsakymo tipas
{}, // Body - gaunami duomenys
{} // QueryParams - duomenys siunciant GET uzklausas, pvz: ?min=1&max=18
> = (req, res) => {
  res.status(200).json(moviesData);
};
