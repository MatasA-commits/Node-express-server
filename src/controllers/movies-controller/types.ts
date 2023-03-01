import { RowDataPacket } from 'mysql2';

export type PrivateMovieModel = {
  id: string,
  title: string,
  main_character: {
    actor: string,
    role: string
  },
  images: string[],
  year: string,
  rating: number
};

export type MovieModel = PrivateMovieModel & RowDataPacket;

export type MovieData = Omit<PrivateMovieModel, 'id'>;

export type PartialMovieDataValidation = Partial<MovieData>;
