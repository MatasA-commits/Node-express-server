import {
  object, string, number, array,
} from 'yup';

export default object({
  title: string().required('title is required'),
  mainCharacter: object({
    actor: string().required('actor is required'),
    role: string().required('role is required'),
  }),
  images: array(string()).required('images are required'),
  year: string().required('year is required'),
  rating: number().required('rating is required'),
});
