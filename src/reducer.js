import { combineReducers } from 'redux';
import moviesReducer from './features/movies/moviesSlice';

const rootReducer = combineReducers({
  moviesData: moviesReducer,
});

export default rootReducer;
