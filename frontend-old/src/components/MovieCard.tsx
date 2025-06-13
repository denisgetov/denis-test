import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../types';
import './MovieCard.scss';

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card">
   <img src={`http://localhost:5000/assets/images/${movie.img}`} alt={movie.name} />

      <h2>{movie.name}</h2>
      <p>{movie.genres.join(', ')}</p>
    </Link>
  );
};

export default MovieCard;
