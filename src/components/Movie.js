import styles from './Movie.module.css';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../ApiUrl';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Bookmark } from './Bookmark';

export default function Movie({ movie }) {
  const { title, vote_average } = movie;

  const imageUrl = IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path;

  return (
    <div className={styles.movie}>
      <Link to={`/movies/${movie.id}`}>
        <div
          className={styles.image}
          style={{
            background: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        ></div>
      </Link>

      <div className={styles.info}>
        <div>
          <h3>{title}</h3>
        </div>
        <div className={styles.icons}>
          <span>
            <FontAwesomeIcon icon={faStar} className={styles.star} />
            {vote_average}
          </span>
          <Bookmark movie={movie} />
        </div>
      </div>
    </div>
  );
}
