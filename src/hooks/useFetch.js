import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from '../ApiUrl';
import {
  fetchInitMovies,
  fetchSuccessMovies,
} from '../features/movies/moviesSlice';

export default function useFetch(searchTerm = '', page = 1) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInitMovies());
    axios
      .get(
        searchTerm
          ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
          : `${POPULAR_BASE_URL}&page=${page}`
      )
      .then(function (response) {
        dispatch(fetchSuccessMovies(response.data.results));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [searchTerm, page]);
}
