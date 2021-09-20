import { useSelector } from 'react-redux';
import Movie from '../components/Movie';

export default function BookmarksPage() {
  const bookMarkedMovies = useSelector(
    (state) => state.moviesData
  ).bookMarkedMovies;

  return (
    <div className="BookmarksPage">
      <div className=" gridWrapper">
        <h1 className="gridTitle">Bookmarks</h1>
        <div className="gridContent">
          {bookMarkedMovies.length < 1 && 'Nothing bookmarked yet =('}
          {bookMarkedMovies.map((movie) => (
            <div className="gridContent">
              <Movie key={movie.id} movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
