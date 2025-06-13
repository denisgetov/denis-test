import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Movie } from '../types';
import './MovieDetail.scss';

const MovieDetail: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/${id}`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [id]);

  if (!movie) {
    return (
      <div className="movie-detail">
        <p>Loading Denis Movies</p>
      </div>
    );
  }

  return (
    <div className="movie-detail">
      <Link to="/">← Back to Movies</Link>
      <div className="movie-content">
         <img src={`http://localhost:5000/assets/images/${movie.img}`} alt={movie.name} />

        <div className="movie-info">
          <h2>{movie.name}</h2>
          <p><strong>Genres:</strong> {movie.genres.join(', ')}</p>
          <p><strong>Rating:</strong> {movie.rate}</p>
          <p><strong>Length:</strong> {movie.length}</p>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
