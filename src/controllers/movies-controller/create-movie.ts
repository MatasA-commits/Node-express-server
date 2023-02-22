import { RequestHandler } from 'express';
import * as yup from 'yup';
import moviesData from './movies-data';
import MovieModel from './movie-model';

type MovieData = Omit<MovieModel, 'id'>;
type PartialMovieData = PartialRecursive<MovieData>;

const movieDataValidationSchema: yup.ObjectSchema<MovieData> = yup.object({
  title: yup.string()
    .required('title is required')
    .min(2, 'title must have 2 symbols')
    .max(32),

  year: yup.string()
    .required('year is required')
    .min(2, 'year must have 2 symbols')
    .max(30),

  rating: yup.number()
    .required('rating is required')
    .positive('rating must be postivie')
    .min(1, 'rating min 1')
    .max(10, 'rating max 10'),

  images: yup.array(yup.string().required('images must be string'))
    .required('images required')
    .min(1, 'must have atleast one image'),

  mainCharacter: yup
    .object({
      actor: yup.string()
        .required('actor is required')
        .min(2, 'actor must have 2 symbols')
        .max(32),
      role: yup.string()
        .required('role is required')
        .min(2, 'role must have 2 symbols')
        .max(32),
    })
    .required('main character is required'),
}).strict(true);

const isMovieData = (
  potentialMovieData: PartialMovieData | MovieData,
): potentialMovieData is MovieData => {
  /*  if (typeof title !== 'string') return false;
  if (typeof year !== 'string') return false;
  if (typeof rating !== 'number') return false;
  if (!Array.isArray(images)) return false;
  if (images.some((img) => typeof img !== 'string')) return false;
  if (mainCharacter === null || typeof mainCharacter !== 'object') return false;
  if (typeof mainCharacter.actor !== 'string') return false;
  if (typeof mainCharacter.role !== 'string') return false; */
  try {
    movieDataValidationSchema.validateSync(potentialMovieData);
    return true;
  } catch (error) {
    return false;
  }
};

export const createMovie: RequestHandler<
{},
MovieModel | ResponseError,
PartialMovieData,
{}
> = (req, res) => {
  const movieData = req.body;
  if (!isMovieData(movieData)) {
    res.status(400).json({ error: 'Incorrect data' });
    return;
  }
  const newMovie: MovieModel = { id: '5', ...movieData };
  moviesData.push(newMovie);
  res.status(201).json(newMovie);
};
