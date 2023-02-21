type MovieModel = {
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

export default MovieModel;
