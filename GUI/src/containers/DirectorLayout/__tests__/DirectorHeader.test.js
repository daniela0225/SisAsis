import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import DirectorHeader from '../DirectorHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><DirectorHeader /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

