import mysql from 'mysql2/promise';
import config from '../../../config';
import { MovieModel } from '../types';
import SQL from './sql';

export const getMovies = async (): Promise<MovieModel[]> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const sql = `
    ${SQL.SELECT}
    ${SQL.GROUP}
  `;
  const [movies] = await mySqlConnection.query<MovieModel[]>(sql);

  mySqlConnection.end();

  return movies;
};
