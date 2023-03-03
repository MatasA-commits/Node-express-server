import mysql from 'mysql2/promise';
import config from '../../../config';
import { colonObjectQueryFormat } from '../../../services/my-sql';
import { MovieModel, PartialMovieDataValidation } from '../types';
import SQL from './sql';

type PrepareSqlResult = [string, Record<string, string>];

type PrepareSql = (movieData: PartialMovieDataValidation) => PrepareSqlResult;

const prepareImagesSql: PrepareSql = (movieData) => {
  const bindingsOrNull = movieData.images?.reduce((prevBindings, img, i) => ({
    ...prevBindings,
    [`img${i + 1}`]: img,
  }), {} as Record<string, string>) ?? null;
  const shouldInsert = bindingsOrNull !== null;
  const shouldInsertImages = movieData.images !== undefined && movieData.images.length > 0;

  const sql = shouldInsert
    ? `
      DELETE FROM images 
      WHERE images.movieId = :id;
    
      ${shouldInsertImages ? `INSERT INTO images (src, movieId) VALUES
        ${Object.keys(bindingsOrNull).map((imgBinding) => `(:${imgBinding}, :id)`).join(',\n')};`
    : ''}
    ` : '';

  const bindings = bindingsOrNull ?? {};

  return [sql, bindings];
};

const prepareMainCharacterSql: PrepareSql = (movieData) => {
  const sql = movieData.main_character !== undefined ? `
    INSERT INTO main_character (actor, role) VALUES
    (:actor, :role);` : '';
  const bindings = movieData.main_character ?? {};

  return [sql, bindings];
};

const prepareMovieSql: PrepareSql = (movieData) => {
  const propsSql = [
    movieData.title !== undefined ? 'title = :title' : null,
    movieData.rating !== undefined ? 'rating = :rating' : null,
    movieData.year !== undefined ? 'year = :year' : null,
    movieData.main_character !== undefined ? 'mainCharacterId = LAST_INSERT_ID()' : null,
  ].filter((setPropSql) => setPropSql !== null).join(',\n');

  const sql = propsSql.length > 0 ? `
    UPDATE movies SET
    ${propsSql}
    WHERE movies.id = :id;
    ` : '';

  const bindings: Record<string, string> = {};
  if (movieData.title !== undefined) bindings.title = movieData.title;
  if (movieData.rating !== undefined) bindings.rating = String(movieData.rating);
  if (movieData.year !== undefined) bindings.year = movieData.year;

  return [sql, bindings];
};

export const updateMovie = async (
  id: string,
  movieData: PartialMovieDataValidation,
): Promise<MovieModel> => {
  const mySqlConnection = await mysql.createConnection(config.db);
  mySqlConnection.config.queryFormat = colonObjectQueryFormat;

  const [imagesSql, imagesBindings] = prepareImagesSql(movieData);
  const [mainCharacterSql, mainCharacterBindings] = prepareMainCharacterSql(movieData);
  const [movieSql, movieBindings] = prepareMovieSql(movieData);

  const preparedSql = `
    ${imagesSql}
    ${mainCharacterSql}
    ${movieSql}
    ${SQL.SELECT}
    WHERE m.id = :id
    ${SQL.GROUP};
  `.trim();

  console.log(mainCharacterBindings);
  console.log('----------');

  const bindings = {
    id,
    ...imagesBindings,
    ...mainCharacterBindings,
    ...movieBindings,
  };

  console.log(bindings);

  const [queryResultsArr] = await mySqlConnection.query<MovieModel[]>(preparedSql, bindings);
  const updatedMovie = queryResultsArr.at(-1) as MovieModel;

  await mySqlConnection.end();

  return updatedMovie;
};
