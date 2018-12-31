import React from 'react';
import ReactDOM from 'react-dom';
import PadreAside from '../PadreAside';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PadreAside />, div);
  ReactDOM.unmountComponentAtNode(div);
});