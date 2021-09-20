import styles from './Actor.module.css';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../ApiUrl';
import { Link } from 'react-router-dom';

export default function Actor({ cast }) {
  const { name, character, profile_path } = cast;

  const actorImage = profile_path
    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`
    : '';

  return (
    <div className={styles.actorCard}>
      <Link to={`/actors/${cast.id}`}>
        <img src={actorImage} className={styles.actorImage}></img>
      </Link>
      <h3>{name}</h3>
      <p className={styles.character}>{character}</p>
    </div>
  );
}
