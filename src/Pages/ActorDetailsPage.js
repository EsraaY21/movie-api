import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL, API_KEY } from '../ApiUrl';
import ActorHero from '../components/ActorHero';
import Loader from '../components/Loader';

const ActorDetailsPage = () => {
  const { actorId } = useParams();

  const [actorData, setActorData] = useState({
    loading: true,
    error: false,
    actor: {},
  });

  const [movieData, setMovieData] = useState({
    loading: true,
    error: false,
    movies: {},
  });

  useEffect(() => {
    setActorData({ ...actorData, loading: true, error: false });
    setMovieData({ ...movieData, loading: true, error: false });

    // ACTOR DETAILS **************
    axios
      .get(`${API_URL}person/${actorId}?api_key=${API_KEY}`)
      .then(function (response) {
        setActorData({
          ...actorData,
          loading: false,
          error: false,
          actor: response.data,
        });
      });

    // MOVIES ********************
    axios
      .get(`${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}`)
      .then(function (response) {
        console.log(response.data.cast);
        setMovieData({
          ...movieData,
          loading: false,
          error: false,
          movies: response.data.cast,
        });
      });
  }, [actorId]);

  return (
    <div className="ActorDetailsPage">
      <div>
        {actorData.loading || movieData.loading ? (
          <Loader />
        ) : (
          <ActorHero actor={actorData.actor} movies={movieData.movies} />
        )}
      </div>
    </div>
  );
};

export default ActorDetailsPage;
