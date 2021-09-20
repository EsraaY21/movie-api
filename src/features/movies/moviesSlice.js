const initialState = {
  isLoading: true,
  movies: [],
  error: false,
  searchTerm: '',
  page: 1,
  bookMarkedMovies: [],
};

export const fetchInitMovies = () => {
  return { type: 'fetch/movies/init' };
};

export const fetchSuccessMovies = (moviesResponse) => {
  return { type: 'fetch/movies/success', payload: moviesResponse };
};

export const changeSearchTerm = (value) => {
  return { type: 'movies/search', payload: value };
};

export const addBookMark = (movie) => {
  return { type: 'movies/bookmark/add', payload: movie };
};

export const removeBookMark = (movieId) => {
  return { type: 'movies/bookmark/remove', payload: movieId };
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case 'fetch/movies/init':
      return { ...state, isLoading: true, error: false };

    case 'fetch/movies/success':
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
        error: false,
      };

    case 'movies/search':
      return {
        ...state,
        searchTerm: action.payload,
      };

    case 'movies/bookmark/add':
      return {
        ...state,
        bookMarkedMovies: [...state.bookMarkedMovies, action.payload],
      };

    case 'movies/bookmark/remove':
      return {
        ...state,
        bookMarkedMovies: [...state.bookMarkedMovies].filter(
          (movie) => movie.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
