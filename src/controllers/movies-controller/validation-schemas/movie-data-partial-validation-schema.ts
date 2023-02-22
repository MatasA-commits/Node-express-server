import * as yup from 'yup';

import { PartialMovieDataValidation } from '../types';

const partialMovieDataValidationSchema: yup.ObjectSchema<PartialMovieDataValidation> = yup.object({
  title: yup.string()
    .min(2, 'title must have 2 symbols')
    .max(32),

  year: yup.string()
    .min(2, 'year must have 2 symbols')
    .max(30),

  rating: yup.number()
    .positive('rating must be postivie')
    .min(1, 'rating min 1')
    .max(10, 'rating max 10'),

  images: yup.array(yup.string().required('images must be string'))
    .min(1, 'must have atleast one image'),

  mainCharacter: yup
    .object({
      actor: yup.string()
        .required('Actor is required')
        .min(2, 'actor must have 2 symbols')
        .max(32),
      role: yup.string()
        .required('Actor is required')
        .min(2, 'role must have 2 symbols')
        .max(32),
    }),
}).strict(true);

export default partialMovieDataValidationSchema;
