import React from 'react';
import styles from './Bookmark.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addBookMark, removeBookMark } from '../features/movies/moviesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

export const Bookmark = ({ movie }) => {
  const dispatch = useDispatch();

  const bookMarkedMovies = useSelector(
    (state) => state.moviesData
  ).bookMarkedMovies;

  const bookmarked = bookMarkedMovies.some(
    (bookmark) => bookmark.id === movie.id
  );

  function handleBookmarkClick() {
    if (!bookmarked) {
      dispatch(addBookMark(movie));
    } else {
      dispatch(removeBookMark(movie.id));
    }
  }

  return (
    <>
      {bookmarked ? (
        <span>
          <FontAwesomeIcon
            icon={faBookmark}
            onClick={handleBookmarkClick}
            className={styles.bookmarked}
          />
        </span>
      ) : (
        <span>
          <FontAwesomeIcon
            icon={faBookmark}
            onClick={handleBookmarkClick}
            className={styles.bookmark}
          />
        </span>
      )}
    </>
  );
};
