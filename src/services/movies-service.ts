import mysql from 'mysql2/promise';
import config from '../config';
import { MovieModel, MovieData } from '../controllers/movies-controller/types';

type CreateMovieQueryResult = [
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  mysql.ResultSetHeader,
  MovieModel[],
];

const SQL_SELECT = `
SELECT m.id, m.title, JSON_OBJECT('actor', c.actor, 'role', c.role) as main_character, m.year, m.rating, json_arrayagg(i.src) as images
  FROM images as i
  LEFT JOIN movies as m
  ON i.movieId = m.id
  LEFT JOIN  main_character as c
  ON m.mainCharacterId = c.id`;
const SQL_GROUP = 'GROUP BY m.id;';
const SQL_WHERE_ID = 'WHERE m.id = ?';

const getMovies = async (): Promise<MovieModel[]> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const sql = [SQL_SELECT, SQL_GROUP].join('\n');
  const [houses] = await mySqlConnection.query<MovieModel[]>(sql);

  mySqlConnection.end();

  return houses;
};

const getMovie = async (id: string): Promise<MovieModel> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const preparedSql = [SQL_SELECT, SQL_WHERE_ID, SQL_GROUP].join('\n');
  const preparedSqlData = [id];
  const [movies] = await mySqlConnection.query<MovieModel[]>(preparedSql, preparedSqlData);

  mySqlConnection.end();

  if (movies.length === 0) {
    throw new Error(`movie with id: ${id} was not found`);
  }

  return movies[0];
};

const createMovie = async (movieData: MovieData): Promise<MovieModel> => {
  const mySqlConnection = await mysql.createConnection(config.db);

  const preparedSql = `
  INSERT INTO main_character (actor, role) VALUES (?, ?);
    
  INSERT INTO movies (title, year, rating, mainCharacterId) VALUES (?,?,?, LAST_INSERT_ID());


  SET @movieId = LAST_INSERT_ID();
    
  INSERT INTO images (src, movieId) VALUES ${movieData.images.map(() => '(?, @movieId)').join(',\n')};

    ${SQL_SELECT}
    WHERE m.id = @movieId
    ${SQL_GROUP};
  `;
  const preparedSqlData = [
    movieData.main_character.actor,
    movieData.main_character.role,
    movieData.title,
    movieData.year,
    movieData.rating,
    ...movieData.images,
  ];

  const [queryResultsArr] = await mySqlConnection.query(preparedSql, preparedSqlData);
  const [createdMovie] = (queryResultsArr as CreateMovieQueryResult)[4];

  await mySqlConnection.end();

  return createdMovie;
};

const MovieService = {
  getMovie,
  getMovies,

  createMovie,
};

export default MovieService;
