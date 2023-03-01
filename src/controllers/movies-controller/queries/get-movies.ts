import { RequestHandler } from 'express';
import mysql from 'mysql2/promise';
import config from '../../../config';
import { MovieModel } from '../types';

export const getMovies: RequestHandler<
{},
MovieModel[],
{},
{}
> = async (req, res) => {
  const mySqlConnection = await mysql.createConnection(config.db);
  const [movies] = await mySqlConnection.query<MovieModel[]>(`
  SELECT m.id, m.title, JSON_OBJECT('actor', c.actor, 'role', c.role) as main_character, m.year, m.rating, json_arrayagg(i.src) as images
  FROM images as i
  LEFT JOIN movies as m
  ON i.movieId = m.id
  LEFT JOIN  main_character as c
  ON m.mainCharacterId = c.id
  GROUP BY m.id;
  `);
  await mySqlConnection.end();

  res.status(200).json(movies);
};
