import React from 'react';
import { useParams } from 'react-router-dom';
import Movie from './Movie.js';

export default function MovieList(props) {
  return (
    <div className='movie-list'>
      {props.movies.map((movie) => (
        <>
          <MovieDetails key={movie.id} movie={movie} />
        </>
      ))}
    </div>
  );
}

function getMovieId(event) {
  const movieId = event.target.value;
  return movieId.id;
}
function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className='movie-card' onClick={getMovieId}>
      <h2>{title}</h2>
      <div className='movie-director'>
        Director: <em>{director}</em>
      </div>
      <div className='movie-metascore'>
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
