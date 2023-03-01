import * as yup from 'yup';

const titleSchema = yup.string()
  .min(2, 'title must have 2 symbols')
  .max(256);

export default titleSchema;
