import { useEffect, useState } from 'react';
import axios from 'axios';
import { IMAGE_BASE_URL, POSTER_SIZE, ACTORS_BASE_URL } from '../ApiUrl';
import styles from './AllActorsPage.module.css';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

const AllActorsPage = () => {
  const initialActorsState = {
    loading: true,
    error: false,
    actors: [],
  };

  const [actorsData, setActorsData] = useState(initialActorsState);

  useEffect(() => {
    setActorsData(initialActorsState);
    axios
      .get(ACTORS_BASE_URL)
      .then(function (response) {
        setActorsData({
          loading: false,
          error: false,
          actors: response.data.results,
        });
      })
      .catch(function (error) {});
  }, []);

  return (
    <div className="container">
      <h1 className="gridTitle">Actors</h1>
      <div>
        {actorsData.loading ? (
          <Loader />
        ) : (
          <div className="row">
            {actorsData.actors.map((actor) => (
              <div key={actor.id} className={`${styles.actor} col-md-4 `}>
                <Link to={`/actors/${actor.id}`}>
                  <img
                    className={styles.image}
                    src={`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`}
                    alt={actor.name}
                  />
                </Link>
                <p>{actor.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllActorsPage;
