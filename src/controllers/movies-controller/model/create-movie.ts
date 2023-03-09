import mysql from 'mysql2/promise';
import config from '../../../config';
import { MovieViewModel, MovieData } from '../types';
import SQL from './sql';

type CreateMovieQueryResult = [
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  MovieViewModel[],
];

export const createMovie = async (movieData: MovieData): Promise<MovieViewModel> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const preparedSql = `
  INSERT INTO main_character (actor, role) VALUES (?, ?);
    
  INSERT INTO movies (title, year, rating, ownerId, mainCharacterId ) VALUES (?,?,?,?, LAST_INSERT_ID());


  SET @movieId = LAST_INSERT_ID();
    
  INSERT INTO images (src, movieId) VALUES ${movieData.images.map(() => '(?, @movieId)').join(',\n')};

    ${SQL.SELECT}
    WHERE m.id = @movieId
    ${SQL.GROUP};
  `;
  const preparedSqlData = [
    movieData.main_character.actor,
    movieData.main_character.role,
    movieData.title,
    movieData.year,
    movieData.rating,
    movieData.ownerId,
    ...movieData.images,
  ];

  const [queryResultsArr] = await mySqlConnection.query(preparedSql, preparedSqlData);
  const [createdMovie] = (queryResultsArr as CreateMovieQueryResult)[4];

  await mySqlConnection.end();

  return createdMovie;
};
