import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'd20d59385a24fc2bb8d46bbba54c1ffd';

export const fetchTrendingMovies = async () => {
    const response = await axios
        .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const fetchMovieByQuery = async (query) => {
    const response = await axios
        .get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}&page=1&include_adult=false`);
    return response.data.results;
}

export const fetchMovieInfoById = async (movieId) => {
    const response = await axios
        .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
}

export const fetchCastById = async (movieId) => {
    const response = await axios
        .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&page=1`);
    return response.data.cast;
}

export const fetchReviewsById = async (movieId) => {
    const response = await axios
        .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&page=1`);
    return response.data.results;
}