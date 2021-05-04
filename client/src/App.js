import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SavedList from './Movies/SavedList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';
import { useRouteMatch } from 'react-router';

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then((response) => {
          console.log(response.data.movie);
          setMovieList(response.data); // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch((error) => {
          console.error('Server Error', error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div className='App'>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />
      <div>
        <Switch>
          <Route exact path='/' component={MovieList}>
            <MovieList movieList={movieList} movies={movieList} />
          </Route>
          <Route exact path='/movies/:id'>
            <Movie key={movieList.id}></Movie>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
