const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const TRENDING_BASE_URL = `${API_URL}trending/movie/day?api_key=${API_KEY}`;
const ACTORS_BASE_URL = `${API_URL}person/popular?api_key=${API_KEY}`;
const RELATED_MOVIES_BASE_URL = `${API_URL}movie/`;
const TRAILERS_BASE_URL = `${API_URL}movie/`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  TRENDING_BASE_URL,
  ACTORS_BASE_URL,
  RELATED_MOVIES_BASE_URL,
  TRAILERS_BASE_URL,
};
