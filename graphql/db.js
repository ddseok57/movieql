import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json";

export const getMovies = (limit, rating) => {
    return fetch(`${API_URL}?limit=${limit}&minimum_rating=${rating}`)
    .then(res => res.json())
    .then(json => json.data.movies);
};

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0];
// };

// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if (movies.length > cleanedMovies.length) {
//         movies = cleanedMovies;
//         return true;
//     }
//     else {
//         return false;
//     }
// };

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: movies.length + 1,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie
// };