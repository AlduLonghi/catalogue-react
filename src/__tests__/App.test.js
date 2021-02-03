import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import App from '../components/App';
import store from '../redux/store';

test('renders website name', () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(getByTestId('website_name')).toBeInTheDocument();
});
