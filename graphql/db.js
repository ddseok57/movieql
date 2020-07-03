export let movies = [
    {
        id: 0,
        name: "Star Wars",
        score: 1
    },
    {
        id: 1,
        name: "Ring",
        score: 86
    },
    {
        id: 2,
        name: "Lion King",
        score: 39
    },
    {
        id: 3,
        name: "Avengers",
        score: 99
    },
    {
        id: 4,
        name: "The Godfather",
        score: 2
    }
]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movies => movies.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movies => movies.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    }
    else {
        return false;
    }
};