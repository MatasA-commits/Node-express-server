import * as yup from 'yup';

const mainCharacterSchema = yup
  .object({
    actor: yup.string()
      .required('actor is required')
      .min(2, 'actor must have 2 symbols')
      .max(32),
    role: yup.string()
      .required('role is required')
      .min(2, 'role must have 2 symbols')
      .max(32),
  });
export default mainCharacterSchema;
