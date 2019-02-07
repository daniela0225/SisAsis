import React from 'react';
import ReactDOM from 'react-dom';
import ProfesorAside from '../ProfesorAside';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfesorAside />, div);
  ReactDOM.unmountComponentAtNode(div);
});
