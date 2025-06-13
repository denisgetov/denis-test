import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from './MovieCard';
import { BrowserRouter } from 'react-router-dom';

test('renders movie title', () => {
 const movie = {
  id: 1,                
  key: 'test-movie',    
  name: 'Test Movie',   
  description: 'Test description',
  genres: ['Action'],   
  rate: '8.5',         
  length: '1hr 30mins', 
  img: 'test.jpg',     
};

  const { getByText } = render(
    <BrowserRouter>
      <MovieCard movie={movie} />
    </BrowserRouter>
  );

  expect(getByText('Test Movie')).toBeInTheDocument();
});
