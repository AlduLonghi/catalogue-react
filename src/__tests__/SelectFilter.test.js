import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import SelectFilter from '../components/SelectFilter';
import store from '../redux/store';

it('Renders SelectFilter Component', () => {
  const filter = renderer.create(
    <Provider store={store}>
      <SelectFilter />
    </Provider>,
  ).toJSON();
  expect(filter).toMatchSnapshot();
});

it('Should change the value when you click an option', () => {
  render(
    <Provider store={store}>
      <SelectFilter />
    </Provider>,
  );
  expect(screen.getByText('All')).toBeInTheDocument();

  fireEvent.change(screen.getByTestId('select'), {
    target: { value: 'Painting' },
  });

  expect(screen.getByText('Painting')).toBeInTheDocument();
});
