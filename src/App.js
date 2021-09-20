import './App.css';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import MoviesPage from './Pages/MoviesPage';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import BookmarksPage from './Pages/BookmarksPage';
import ActorDetailsPage from './Pages/ActorDetailsPage';
import AllActorsPage from './Pages/AllActorsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>

        <Route path="/bookmarks">
          <BookmarksPage />
        </Route>

        <Route path="/actors" exact>
          <AllActorsPage />
        </Route>

        <Route path="/actors/:actorId">
          <ActorDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
