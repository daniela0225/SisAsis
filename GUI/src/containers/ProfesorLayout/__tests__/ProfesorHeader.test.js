import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import ProfesorHeader from '../ProfesorHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><ProfesorHeader /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

