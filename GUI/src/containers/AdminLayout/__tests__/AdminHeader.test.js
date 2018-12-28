import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import AdminHeader from '../AdminHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><AdminHeader /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
