import * as yup from 'yup';

import { MovieBody } from '../types';
import titleSchema from './title-schema';
import yearSchema from './year-schema';
import ratingSchema from './rating-schema';
import imagesSchema from './images-schema';
import mainCharacterSchema from './main-character-schema';

const movieDataValidationSchema: yup.ObjectSchema<MovieBody> = yup.object({
  title: titleSchema.required('title is required'),
  year: yearSchema.required('Year is required'),
  rating: ratingSchema.required('rating is required'),
  images: imagesSchema.required('images required'),
  main_character: mainCharacterSchema.required('main character required'),
}).strict(true);

export default movieDataValidationSchema;
