import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useFetch from '../hooks/useFetch';
import Movie from '../components/Movie';
import Loader from '../components/Loader';
import { changeSearchTerm } from '../features/movies/moviesSlice';
import axios from 'axios';
import { TRENDING_BASE_URL } from '../ApiUrl';
import HomeHero from '../components/HomeHero';

export default function Home() {
  const moviesData = useSelector((state) => state.moviesData);
  const dispatch = useDispatch();

  const initialTrendingState = {
    loading: true,
    error: false,
    movies: [],
  };
  const [trendingMovies, setTrendingMovies] = useState(initialTrendingState);

  if (moviesData.searchTerm !== '') {
    dispatch(changeSearchTerm(''));
  }

  // FETCH POPULAR MOVIES ******************
  useFetch(moviesData.searchTerm, moviesData.page);

  // FETCH TRENDING MOVIES ******************
  useEffect(() => {
    setTrendingMovies(initialTrendingState);

    axios
      .get(TRENDING_BASE_URL)
      .then(function (response) {
        setTrendingMovies({
          loading: false,
          error: false,
          movies: response.data.results,
        });
      })
      .catch(function (error) {});
  }, []);

  console.log(moviesData.movies);

  return (
    <div className="Home">
      {moviesData.loading ? (
        <Loader />
      ) : (
        <HomeHero movies={moviesData.movies} />
      )}
      <div>
        {moviesData.isLoading ? (
          <Loader />
        ) : (
          <div className="popularMovies">
            <div className="gridWrapper">
              <h1 className="gridTitle">Popular Movies</h1>
              <div className="gridContent">
                {moviesData.movies.map((movie) => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        {trendingMovies.loading ? (
          <Loader />
        ) : (
          <div
            className="trending"
            style={{ backgroundColor: '#0C1219', padding: '1.5rem 0' }}
          >
            <div className="gridWrapper">
              <h1 className="gridTitle">Trending Movies</h1>
              <div className="gridContent">
                {trendingMovies.movies.map((movie) => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
