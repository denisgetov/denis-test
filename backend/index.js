const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

const movies = require('../content/movie.mock-data.json');

app.use(cors());

app.use(
  '/assets/images',
  express.static(path.join(__dirname, '../content/assets/images/movie-covers'))
);

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.get('/api/movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = movies.find(m => m.id === id);

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
