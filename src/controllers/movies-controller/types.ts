export type MovieModel = {
  id: string,
  title: string,
  mainCharacter: {
    actor: string,
    role: string
  },
  images: string[],
  year: string,
  rating: number
};

export type MovieData = Omit<MovieModel, 'id'>;
