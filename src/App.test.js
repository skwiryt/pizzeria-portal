
/* domyślny test z zastosowaniem react testin library
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/
import App from './App';
import React from 'react';
import {shallow} from 'enzyme';
it('renders with no crashing', () => {
  shallow(<App />);
});