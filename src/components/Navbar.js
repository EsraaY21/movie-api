import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSearchTerm } from '../features/movies/moviesSlice';

export default function Navbar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  function changeHandler(event) {
    setSearchValue(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    dispatch(changeSearchTerm(searchValue));
    history.push('/movies');
  }

  return (
    <header>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/movies" className="nav-link">
                  Movies
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/bookmarks" className="nav-link">
                  Bookmarks
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/actors" className="nav-link">
                  Actors
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={submitHandler}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Movie"
                aria-label="Search"
                onChange={changeHandler}
                value={searchValue}
              />
              <button className="btn btn-outline-warning" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
