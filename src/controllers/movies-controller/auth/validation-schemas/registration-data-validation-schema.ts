import * as yup from 'yup';
import { RegistrationData } from '../types';

const registrationDataValidationSchema: yup.ObjectSchema<RegistrationData> = yup
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
    passwordConfirmation: yup.string()
      .required('confirm password is required')
      .oneOf([yup.ref('password')], 'Passwords must match'),
    name: yup.string()
      .required('name is required')
      .min(2, 'name must be atleast 2 symbols long')
      .max(64, 'name must be not longer than 64 symbols'),
    surname: yup.string()
      .required('surname is required')
      .min(2, 'name must be atleast 2 symbols long')
      .max(64, 'name must be not longer than 64 symbols'),
  }).strict(true);
export default registrationDataValidationSchema;
