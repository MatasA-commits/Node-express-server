import * as yup from 'yup';

const titleSchema = yup.string()
  .min(2, 'title must have 2 symbols')
  .max(32);

export default titleSchema;
