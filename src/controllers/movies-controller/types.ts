import { RowDataPacket } from 'mysql2';

export type PrivateViewMovieModel = {
  id: string,
  title: string,
  main_character: {
    actor: string,
    role: string
  },
  images: string[],
  year: string,
  rating: number,
  owner: {
    id: number,
    name: string,
    surname: string,
    email: string,
    mobile: string
  }
};

export type MovieBody = Omit<MovieData, 'ownerId'>;

export type MovieViewModel = PrivateViewMovieModel & RowDataPacket;

export type MovieData = Omit<PrivateViewMovieModel, 'id' | 'owner'> & {
  ownerId: number
};

export type PartialMovieDataValidation = Partial<MovieBody>;
