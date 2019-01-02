import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Route} from 'react-router-dom';
import PorteroLayout from '../PorteroLayout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Route path="/" name="Home" component={PorteroLayout} /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
