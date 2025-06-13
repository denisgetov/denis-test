// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock global fetch before each test
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ title: 'Inception' }]),
    })
  ) as jest.Mock;
});

// Reset mocks after each test
afterEach(() => {
  jest.resetAllMocks();
});

test('renders Denis Movies title on the homepage', async () => {
  render(<App />);
  const heading = await screen.findByText(/Denis Movies/i);
  expect(heading).toBeInTheDocument();
});
