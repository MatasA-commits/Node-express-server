import * as yup from 'yup';

import { MovieData } from '../types';
import titleSchema from './title-schema';
import yearSchema from './year-schema';
import ratingSchema from './rating-schema';
import imagesSchema from './images-schema';
import mainCharacterSchema from './main-character-schema';

const movieDataValidationSchema: yup.ObjectSchema<MovieData> = yup.object({
  title: titleSchema.required('title is required'),
  year: yearSchema.required('Year is required'),
  rating: ratingSchema.required('rating is required'),
  images: imagesSchema.required('images required'),
  mainCharacter: mainCharacterSchema.required('main character required'),
}).strict(true);

export default movieDataValidationSchema;
