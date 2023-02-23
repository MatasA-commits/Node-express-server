import * as yup from 'yup';

const ratingSchema = yup.number()
  .positive('rating must be postivie')
  .min(1, 'rating min 1')
  .max(10, 'rating max 10');

export default ratingSchema;
