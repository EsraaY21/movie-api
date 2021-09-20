import {
  API_URL,
  API_KEY,
  RELATED_MOVIES_BASE_URL,
  TRAILERS_BASE_URL,
} from '../ApiUrl';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MovieInfo from '../components/MovieInfo';
import Actor from '../components/Actor';
import Movie from '../components/Movie';
import Loader from '../components/Loader';

export default function MovieDetailsPage() {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState({
    loading: true,
    error: false,
    movie: {},
  });

  const [creditsData, setCreditsData] = useState({
    loading: true,
    error: false,
    crew: [],
    cast: [],
  });

  const [relatedMoviesData, setRelatedMoviesData] = useState({
    loading: true,
    error: false,
    movies: [],
  });

  const [trailersData, setTrailersData] = useState({
    loading: true,
    error: false,
    trailers: [],
  });

  const showMovieInfo =
    !movieData.loading &&
    !creditsData.loading &&
    !relatedMoviesData.loading &&
    !trailersData.loading;

  useEffect(() => {
    // load movie details *****
    setMovieData({ ...movieData, loading: true, error: false });
    axios
      .get(`${API_URL}movie/${movieId}?api_key=${API_KEY}`)
      .then(function (response) {
        setMovieData({
          ...movieData,
          loading: false,
          error: false,
          movie: response.data,
        });
      });

    // load credits details *****
    setCreditsData({ ...creditsData, loading: true, error: false });
    axios
      .get(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
      .then(function (response) {
        setCreditsData({
          ...creditsData,
          loading: false,
          error: false,
          crew: response.data.crew,
          cast: response.data.cast,
        });
      });

    // load related movies *************
    setRelatedMoviesData({ ...relatedMoviesData, loading: true, error: false });
    axios
      .get(`${RELATED_MOVIES_BASE_URL}${movieId}/similar?api_key=${API_KEY}`)
      .then(function (response) {
        setRelatedMoviesData({
          ...relatedMoviesData,
          loading: false,
          error: false,
          movies: response.data.results,
        });
      });

    // TRAILERS *************
    setTrailersData({ ...trailersData, loading: true, error: false });
    axios
      .get(`${TRAILERS_BASE_URL}${movieId}/videos?api_key=${API_KEY}`)
      .then(function (response) {
        setTrailersData({
          ...trailersData,
          loading: false,
          error: false,
          trailers: response.data.results.filter(
            (video) => video.type === 'Trailer'
          ),
        });
      });
  }, [movieId]);

  console.log(trailersData.trailers);

  return (
    <div className="MovieDetailsPage">
      <div>
        {showMovieInfo ? (
          <div>
            <MovieInfo movie={movieData.movie} crew={creditsData.crew} />
            <div className="gridWrapper">
              <h1 className="gridTitle">Actors</h1>
              <div className="gridContent">
                {[...creditsData.cast].splice(0, 5).map((cast) => (
                  <Actor cast={cast} key={cast.id} />
                ))}
              </div>

              <div>
                <div className="gridWrapper">
                  <h1 className="gridTitle">Related Movies</h1>
                  <div className="gridContent">
                    {[...relatedMoviesData.movies]
                      .splice(0, 10)
                      .map((movie) => (
                        <Movie movie={movie} key={movie.id} />
                      ))}
                  </div>
                </div>
              </div>

              <div className="gridWrapper">
                <h1 className="gridTitle">Watch Trailer</h1>
                <div className="gridContent">
                  {trailersData.trailers.map((trailer) => (
                    <iframe
                      // width="420"
                      // height="315"
                      title={trailer.key}
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                    ></iframe>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
