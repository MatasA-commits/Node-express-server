import { RequestHandler } from 'express';

type Movie = {
  id: number,
  title: string,
};

type ResponseError = {
  error: string
};

const movies = [
  { id: 1, title: 'movie1' },
  { id: 2, title: 'movie2' },
  { id: 3, title: 'movie3' },
  { id: 4, title: 'movie4' },
];

export const getMovies: RequestHandler<
{}, // Parametrai
Movie[], // Atsakymo tipas
{}, // Body - gaunami duomenys
{} // QueryParams - duomenys siunciant GET uzklausas, pvz: ?min=1&max=18
> = (req, res) => {
  res.status(200).json(movies);
};

export const createMovie: RequestHandler<
{}, // Parametrai
Movie | ResponseError, // Atsakymo tipas
{ title: string | undefined }, // Body - gaunami duomenys
{} // QueryParams - duomenys siunciant GET uzklausas, pvz: ?min=1&max=18
> = (req, res) => {
  const title = req.body?.title;
  if (title === undefined) {
    res.status(400).json({ error: 'title is required in reques body' });
    return;
  }
  const newMovie = { id: 5, title };
  movies.push(newMovie);
  res.status(201).json(newMovie);
};
