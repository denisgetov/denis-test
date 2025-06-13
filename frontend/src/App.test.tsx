import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ title: 'Ant-Man' }]), 
    })
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks();
});

test('renders Denis Movies title on the homepage', async () => {
  render(<App />);
  const heading = await screen.findByText(/Denis Movies/i);
  expect(heading).toBeInTheDocument();
});
