import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const button = screen.getByText(/go to library/i);
  expect(button).toBeInTheDocument();
});
