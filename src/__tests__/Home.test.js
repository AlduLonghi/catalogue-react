import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../pages/home';
import { Provider } from 'react-redux';
import store from '../redux/store';

it('Snapshot test for Calculator component', () => {
  const tree = renderer
    .create(<Provider store={store}><Home /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});