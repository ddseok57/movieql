import { getMovies, getById, suggestById } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getById(id),
    suggestion: (_, { id }) => suggestById(id)
  }
  // Mutation: {
  //     addMovie: (_, { name, score }) => addMovie(name, score),
  //     deleteMovie: (_, { id }) => deleteMovie(id)
  // }
};

export default resolvers;
