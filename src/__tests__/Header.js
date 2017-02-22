import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../components/Header';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
});

it('Class of rendered table', () => {
  const header = shallow(<Header />);
  expect(header.find('div').first().hasClass('App-header'));
});
