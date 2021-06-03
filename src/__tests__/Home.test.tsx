import React from 'react';
import { render, screen } from '@testing-library/react';
 
import Home from '../components/Home';
 
describe('Home', () => {
  test('renders Home component', () => {
    render(<Home />);
 
    expect(screen.getByText('Hello, welcome to I4DIGITAL!'));
  });
});