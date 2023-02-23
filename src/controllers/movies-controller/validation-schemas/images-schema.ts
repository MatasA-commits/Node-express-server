import * as yup from 'yup';

const imagesSchema = yup.array(yup.string().required('images must be string'))
  .min(1, 'must have atleast one image');
export default imagesSchema;
