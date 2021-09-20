import styles from './MovieInfo.module.css';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../ApiUrl';
import { Bookmark } from './Bookmark';

export default function MovieInfo({ movie, crew }) {
  const movieImageBig = `${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`;
  const backgroundImage = movieImageBig ? movieImageBig : '#000';

  const movieImageSmall = `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`;
  const movieImage = movieImageSmall ? movieImageSmall : 'grey';

  const directors = crew.filter((crew) => crew.job === 'Director');

  const calcTime = () => {
    const hours = Math.floor(movie.runtime / 60);
    const mins = movie.runtime % 60;
    return `${hours}h ${mins}m`;
  };

  const convertMoney = (money) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    });
    return formatter.format(money);
  };

  return (
    <div className="MovieInfo">
      <div
        className={styles.hero}
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={styles.content}>
          <img
            src={movieImage}
            alt={movie.title}
            className={styles.movieImage}
          />
          <div className={styles.textSection}>
            <div className={styles.header}>
              <h1>{movie.title}</h1>
              <p className={styles.genres}>
                {movie.genres.map((genre, index) => {
                  if (index === movie.genres.length - 1) {
                    return `${genre.name}`;
                  } else {
                    return `${genre.name} | `;
                  }
                })}
              </p>
            </div>

            <div className={styles.plot}>
              <h3>PLOT</h3>
              <p>{movie.overview}</p>
            </div>

            <div className={styles.ratingDirectors}>
              <div>
                <h3>RATING</h3>
                <div className={styles.score}>{movie.vote_average}</div>
              </div>
              <div className={styles.director}>
                <h3>DIRECTOR{directors.length > 1 ? 'S' : ''}</h3>
                {directors.map((director) => (
                  <p key={director.credit_id} className={styles.directorName}>
                    {director.name}
                  </p>
                ))}
              </div>
            </div>
            <small>Votes Count: {movie.vote_count} </small>
          </div>
          <Bookmark movie={movie} className={styles.bookmark} />
        </div>
      </div>
      <div className={styles.bar}>
        <div className={styles.barContent}>
          <div className={styles.column}>
            <p>Running Time: {calcTime()}</p>
          </div>

          <div className={styles.column}>
            <p>Budget: {convertMoney(movie.budget)}</p>
          </div>

          <div className={styles.column}>
            <p>Revenue: {convertMoney(movie.revenue)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
