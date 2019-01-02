import React from 'react';
import ReactDOM from 'react-dom';
import PadreFooter from '../PadreFooter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PadreFooter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
