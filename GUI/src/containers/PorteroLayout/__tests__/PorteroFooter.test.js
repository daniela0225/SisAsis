import React from 'react';
import ReactDOM from 'react-dom';
import PorteroFooter from '../PorteroFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PorteroFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
