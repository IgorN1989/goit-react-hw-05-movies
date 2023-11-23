import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const TRENDING_MOVIES = 'trending/movie/day?language=en-US';
const SEARCH_MOVIES = 'search/movie';
const MOVIE_DETAILS = 'movie/';
const MOVIE_CREDITS = '/credits';
const MOVIE_REVIEWS = '/reviews';

const BEARER_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjNjMmYyYjdlODliNjk1MWFmZTJkNTZiMzY0NDQxMiIsInN1YiI6IjY0ZjM4NTJiNzAwYmY3MDEwMDQxZTZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SDu7HaY5RLjgocbsSUGvk676JW6hJoLSQrFdUOrgIWs';
// const API_KEY = 'af3c2f2b7e89b6951afe2d56b3644412';

const axiosTMDB = axios.create();
axiosTMDB.defaults.baseURL = BASE_URL;
axiosTMDB.defaults.headers.common['Authorization'] = `Bearer ${BEARER_TOKEN}`;

export async function fetchTrendingMovies() {
  const response = await axiosTMDB.get(TRENDING_MOVIES);
  return response.data;
}

export async function fetchSearchMovies(movie, page) {
  const response = await axiosTMDB.get(
    `${SEARCH_MOVIES}?query=${movie}&page=${page}`
  );
  return response.data;
}

export async function fetchMovieDetails(movieId) {
  const response = await axiosTMDB.get(`${MOVIE_DETAILS}${movieId}`);
  return response.data;
}

export async function fetchMovieCredits(movieId) {
  const response = await axiosTMDB.get(
    `${MOVIE_DETAILS}${movieId}${MOVIE_CREDITS}`
  );
  return response.data;
}

export async function fetchMovieReviews(movieId) {
  const response = await axiosTMDB.get(
    `${MOVIE_DETAILS}${movieId}${MOVIE_REVIEWS}`
  );
  return response.data;
}
