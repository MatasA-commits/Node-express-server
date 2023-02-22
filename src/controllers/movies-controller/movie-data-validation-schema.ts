import * as yup from 'yup';

import { MovieData } from './types';

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

export default movieDataValidationSchema;
