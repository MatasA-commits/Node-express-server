import * as yup from 'yup';
import { Credentials } from '../types';

const credentialsSchema: yup.ObjectSchema<Credentials> = yup
  .object({
    email: yup.string()
      .email()
      .required('Email is required'),
    password: yup.string()
      .required('password is required')
      .min(2, 'password must have at least 2 symbols')
      .max(32, 'password can\'t have more than 32 symbols')
      .matches(/[A-Z]{1}/, 'password must have at least one upper case letter')
      .matches(/[a-z]{1}/, 'password must have at least one lower case letter')
      .matches(/[0-9]{1}/, 'password must have at least one number')
      .matches(/[#?!@$%^&*-]{1}/, 'password must have at least special character'),

  });
export default credentialsSchema;
