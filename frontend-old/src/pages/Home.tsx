import React, { useEffect, useState } from 'react';
import { Movie } from '../types';
import './Home.scss';
import MovieCard from '../components/MovieCard';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = Array.from(
    new Set(movies.flatMap(movie => movie.genres))
  ).sort();

  const filteredMovies = movies.filter(movie => {
    const title = movie.name || '';
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? movie.genres?.includes(selectedGenre) : true;
    return matchesSearch && matchesGenre;
  });

  useEffect(() => {
    fetch('http://localhost:5000/api/movies')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched movies:', data);
        setMovies(data);
      });
  }, []);

  return (
    <div>
      <h1 >Denis Movies</h1>
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
          <option value="">All Genres</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
      <div className="movie-list">
        {filteredMovies.map((movie, index) => (
          <MovieCard key={`${movie.id}-${index}`} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
