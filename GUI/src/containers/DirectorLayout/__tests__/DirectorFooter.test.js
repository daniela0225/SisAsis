import React from 'react';
import ReactDOM from 'react-dom';
import DirectorFooter from '../DirectorFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DirectorFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
