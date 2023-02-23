import * as yup from 'yup';

import { PartialMovieDataValidation } from '../types';
import titleSchema from './title-schema';
import yearSchema from './year-schema';
import ratingSchema from './rating-schema';
import imagesSchema from './images-schema';
import mainCharacterSchema from './main-character-schema';

const partialMovieDataValidationSchema: yup.ObjectSchema<PartialMovieDataValidation> = yup.object({
  title: titleSchema,
  year: yearSchema,
  rating: ratingSchema,
  images: imagesSchema,
  mainCharacter: mainCharacterSchema,
}).strict(true);

export default partialMovieDataValidationSchema;
