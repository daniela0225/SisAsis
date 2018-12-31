import React from 'react';
import ReactDOM from 'react-dom';
import PorteroAside from '../PorteroAside';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PorteroAside />, div);
  ReactDOM.unmountComponentAtNode(div);
});