import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import PorteroHeader from '../PorteroHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><PorteroHeader /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

