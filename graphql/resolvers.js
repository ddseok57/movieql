import { getMovies, getById, deleteMovie } from "./db"

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id),
        // deleteMovie: (_, { id }) => deleteMovie(id),
    }
}

export default resolvers;