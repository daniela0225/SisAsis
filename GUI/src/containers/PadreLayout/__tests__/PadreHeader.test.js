import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import PadreHeader from '../PadreHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><PadreHeader /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

