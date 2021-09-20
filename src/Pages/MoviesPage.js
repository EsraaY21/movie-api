import { useSelector } from 'react-redux';
import useFetch from '../hooks/useFetch';
import Movie from '../components/Movie';
import Loader from '../components/Loader';

export default function MoviesPage() {
  const moviesData = useSelector((state) => state.moviesData);

  useFetch(moviesData.searchTerm, moviesData.page);

  return (
    <div className="MoviesPage">
      {moviesData.isLoading ? (
        <Loader />
      ) : (
        <div className="gridWrapper">
          <h1 className="gridTitle">Movies Page</h1>
          <div className="gridContent">
            {moviesData.movies.map((movie) => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
