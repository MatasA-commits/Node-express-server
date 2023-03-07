import * as yup from 'yup';
import { Credentials } from '../types';

const credentialsSchema: yup.ObjectSchema<Credentials> = yup
  .object({
    email: yup.string()
      .required('Email is required'),
    password: yup.string()
      .required('password is required'),
  }).strict(true);
export default credentialsSchema;
