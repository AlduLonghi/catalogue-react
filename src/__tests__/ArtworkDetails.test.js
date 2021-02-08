import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import ArtworkDetails from '../pages/artworkDetails';
import store from '../redux/store';

it('Renders the ArtworkDetails component when going to specific route', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/details/143602']}>
        <ArtworkDetails />
      </MemoryRouter>
    </Provider>,
  );

  await waitFor(() => screen.getByTestId('loading-element'));
  expect(screen.getByTestId('loading-element')).toBeDefined();
});
