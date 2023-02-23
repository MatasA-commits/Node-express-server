import * as yup from 'yup';

const yearSchema = yup.string()
  .min(2, 'year must have 2 symbols')
  .max(30);

export default yearSchema;
