import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../ApiUrl';
import styles from './ActorHero.module.css';
import Movie from './Movie';

const ActorHero = ({ actor, movies }) => {
  const {
    name,
    birthday,
    place_of_birth,
    biography,
    popularity,
    deathday,
    profile_path,
  } = actor;

  const imageUrl = IMAGE_BASE_URL + POSTER_SIZE + profile_path;

  const backdrop_path = movies.sort((a, b) => {
    return b.vote_count - a.vote_count;
  })[0].backdrop_path;
  const backgroundUrl = IMAGE_BASE_URL + POSTER_SIZE + backdrop_path;

  return (
    <div>
      <div
        className={styles.page}
        style={{
          backgroundImage: `linear-gradient(to top right, rgba(0,0,0,0.85), rgba(0,0,0,0.6)),url(${backgroundUrl})`,
        }}
      >
        <div className="container">
          <div className={styles.mainContent}>
            <div className="image">
              <img src={imageUrl} />
            </div>
            <div className={styles.text}>
              <h3>{name}</h3>
              <p>
                <span>Birthday:</span> {birthday}
              </p>
              <p>
                <span>Deathday:</span> {deathday}
              </p>
              <p>
                <span>Place of birth:</span> {place_of_birth}
              </p>
              <p>
                <span>Popularity:</span> {popularity}
              </p>
            </div>
          </div>

          <div className={styles.biography}>
            <h2>Biography</h2>
            <p>{biography}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Movies</h2>
        <div className={styles.movieContainer}>
          <div className={`row ${styles.movies}`}>
            {movies.map((movie) => (
              <div className="col">
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorHero;
